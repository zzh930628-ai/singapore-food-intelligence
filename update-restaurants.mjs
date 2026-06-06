import fs from "node:fs/promises";

const DATA_FILE = new URL("../data/restaurants.json", import.meta.url);

const sources = [
  {
    name: "Great New Places",
    url: "https://greatnewplaces.com/",
    weight: 1.05
  },
  {
    name: "The Ordinary Patrons",
    url: "https://ordinarypatrons.com/new-restaurants-in-singapore/",
    weight: 1
  },
  {
    name: "Time Out Singapore",
    url: "https://www.timeout.com/singapore/news/5-new-restaurants-in-singapore-to-check-out-this-june-2026-060126",
    weight: 1.05
  },
  {
    name: "The Ranting Panda",
    url: "https://therantingpanda.com/2026/06/01/food-scoops-new-and-buzzing-singapore-restaurants-in-june-2026/",
    weight: 1
  }
];

const categoryRules = [
  { match: /bakery|bakehouse|bread|pastry|patisserie|tiong bahru bakery|mimmo|mary grace/i, category: "bakery", label: "Bakehouse / 面包甜点" },
  { match: /cafe|coffee|gelato|dessert|visitors|mary grace|tofu g/i, category: "cafe", label: "咖啡馆 / 甜点" },
  { match: /omakase|yakitori|sukiyaki|sushi|japanese|korean|samgyetang|seoul|torikizoku|satori|jiin|hachi/i, category: "japan_korea", label: "日韩餐" },
  { match: /michelin|burnt ends|les amis|chef|omakase|fine|asin|jiin/i, category: "michelin", label: "米其林/名厨背景" },
  { match: /fine|sky dining|omakase|asin|milli/i, category: "fine_dining", label: "Fine dining" },
  { match: /chinese|cantonese|sichuan|hunan|teochew|singaporean|hotpot|quan/i, category: "local_chinese", label: "中餐 / 本地菜" },
  { match: /french|bistro|steak|burger|latin|western|bouillon|chimi|brew/i, category: "western", label: "西餐" }
];

const imageByCategory = {
  bakery: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  cafe: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
  japan_korea: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=900&q=80",
  michelin: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  fine_dining: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  local_chinese: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
  western: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80"
};

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanName(value) {
  return value
    .replace(/\s+/g, " ")
    .replace(/^\s*\d+[\).、]\s*/, "")
    .replace(/^(New Restaurants?|Buzzing Restaurants?|Food Scoops:?|Just opened:?)/i, "")
    .replace(/\s+\|\s+.*$/, "")
    .replace(/\s+-\s+.*$/, "")
    .trim();
}

function normalizeKey(name) {
  return cleanName(name).toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function isBadName(name) {
  return (
    !name ||
    /^(culinary|lifestyle|discover|stores|fashion|travel|kids|green|attractions|nightlife)$/i.test(name) ||
    /^\d+\s+new\s+restaurants?/i.test(name) ||
    /restaurants?\s+in\s+singapore\s+to\s+check\s+out/i.test(name)
  );
}

function inferCategories(text) {
  const hits = [];
  const labels = [];
  for (const rule of categoryRules) {
    if (rule.match.test(text)) {
      hits.push(rule.category);
      labels.push(rule.label);
    }
  }
  if (hits.length === 0) {
    hits.push("western");
    labels.push("新餐厅");
  }
  return {
    category: [...new Set(hits)],
    typeLabel: [...new Set(labels)].slice(0, 2).join(" / ")
  };
}

function inferArea(text) {
  const areas = [
    "Tanjong Pagar",
    "VivoCity",
    "National Gallery",
    "Shaw Centre",
    "Raffles City",
    "Amoy Street",
    "Orchard",
    "Sentosa",
    "Asia Square",
    "Mandarin Gallery",
    "Collyer Quay",
    "Tras Street",
    "Carpenter Street",
    "Holland Village"
  ];
  return areas.find((area) => new RegExp(area, "i").test(text)) || "Singapore";
}

function inferOpened(text) {
  const fullDate = text.match(/\b(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December),?\s+(20\d{2})\b/i);
  if (fullDate) {
    const month = String(new Date(`${fullDate[2]} 1, ${fullDate[3]}`).getMonth() + 1).padStart(2, "0");
    return `${fullDate[3]}-${month}-${String(fullDate[1]).padStart(2, "0")}`;
  }
  const monthDate = text.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(20\d{2})\b/i);
  if (monthDate) {
    const month = String(new Date(`${monthDate[1]} 1, ${monthDate[2]}`).getMonth() + 1).padStart(2, "0");
    return `${monthDate[2]}-${month}`;
  }
  return new Date().toISOString().slice(0, 10);
}

function daysSince(opened) {
  const parsed = new Date(opened.length === 7 ? `${opened}-15T00:00:00+08:00` : `${opened}T00:00:00+08:00`);
  if (Number.isNaN(parsed.getTime())) return 45;
  return Math.max(0, Math.round((Date.now() - parsed.getTime()) / 86400000));
}

function scoreOpening(opened, sourceWeight) {
  const days = daysSince(opened);
  const recency = Math.max(55, 100 - days * 1.8);
  return Math.min(100, Math.round(recency * sourceWeight));
}

function scoreTraffic(text, categories, sourceWeight) {
  let score = 72;
  if (/rooftop|sky|view|gallery|seoul|korean|gelato|bakery|first|largest|viral|exclusive|new concept/i.test(text)) score += 12;
  if (categories.includes("cafe") || categories.includes("bakery")) score += 6;
  if (categories.includes("fine_dining") || categories.includes("michelin")) score += 4;
  return Math.min(100, Math.round(score * sourceWeight));
}

function scoreVisit(text, categories, sourceWeight) {
  let score = 74;
  if (/michelin|les amis|burnt ends|chef|omakase|wagyu|signature|premium|first|popular/i.test(text)) score += 11;
  if (/set|under|from \$|affordable|value|walk-ins/i.test(text)) score += 5;
  if (categories.includes("michelin") || categories.includes("fine_dining")) score += 4;
  return Math.min(100, Math.round(score * sourceWeight));
}

function buildPlace({ name, context, source }) {
  const inferred = inferCategories(`${name} ${context}`);
  const opened = inferOpened(context);
  const primaryCategory = inferred.category[0];
  const visitScore = scoreVisit(context, inferred.category, source.weight);
  const openingScore = scoreOpening(opened, source.weight);
  const trafficScore = scoreTraffic(context, inferred.category, source.weight);

  return {
    name,
    category: inferred.category,
    typeLabel: inferred.typeLabel,
    area: inferArea(context),
    opened,
    spend: inferred.category.includes("fine_dining") || inferred.category.includes("michelin") ? "$$$$" : "$$",
    visitScore,
    openingScore,
    trafficScore,
    image: imageByCategory[primaryCategory] || imageByCategory.western,
    hook: context.slice(0, 90) || "公开来源近期提到的新加坡餐饮线索。",
    shootFor: inferred.category.includes("cafe")
      ? ["咖啡", "穿搭", "闺蜜聚会"]
      : inferred.category.includes("bakery")
        ? ["甜点", "新品测评", "早餐"]
        : inferred.category.includes("japan_korea")
          ? ["探店", "聚餐", "约会"]
          : ["探店", "约会", "朋友聚餐"],
    prediction:
      trafficScore >= 90
        ? "未来两周有机会成为热门打卡点，建议优先查看现场出片条件。"
        : "适合作为候选线索，建议结合 Google 评论和社媒互动再决定。",
    why: "由公开新店来源自动采集，已按新鲜度、话题度和视觉潜力做初步评分。",
    angle: `标题角度：${name} 新加坡新店值不值得冲`,
    proof: `自动采集自 ${source.name}。`,
    source: source.url
  };
}

function extractCandidates(html, source) {
  const candidates = [];
  const headingPattern = /<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi;
  let match;
  while ((match = headingPattern.exec(html))) {
    const rawName = cleanName(stripHtml(match[1]));
    if (!rawName || rawName.length < 3 || rawName.length > 80) continue;
    if (/privacy|search|discover|lifestyle|fashion|sports|travel|about|newsletter|popular|read more/i.test(rawName)) continue;

    const contextHtml = html.slice(Math.max(0, match.index - 500), Math.min(html.length, match.index + 1200));
    const context = stripHtml(contextHtml);
    if (!/restaurant|cafe|bakery|food|dining|bar|omakase|yakitori|coffee|pastry|hotpot|korean|japanese|bistro|menu|eat/i.test(context)) continue;
    candidates.push(buildPlace({ name: rawName, context, source }));
  }
  return candidates;
}

async function fetchSource(source) {
  const response = await fetch(source.url, {
    headers: {
      "User-Agent": "SingaporeFoodIntelligenceBot/1.0 (+https://github.com/zzh930628-ai/singapore-food-intelligence)"
    }
  });
  if (!response.ok) throw new Error(`${source.name}: HTTP ${response.status}`);
  return response.text();
}

async function readExisting() {
  try {
    const text = await fs.readFile(DATA_FILE, "utf8");
    const data = JSON.parse(text);
    return Array.isArray(data.places) ? data.places : [];
  } catch {
    return [];
  }
}

function mergePlaces(existing, discovered) {
  const byKey = new Map();
  for (const place of [...existing, ...discovered]) {
    const cleanedPlace = { ...place, name: cleanName(place.name || "") };
    if (isBadName(cleanedPlace.name)) continue;
    const key = normalizeKey(cleanedPlace.name);
    if (!key) continue;
    const current = byKey.get(key);
    if (!current || score(cleanedPlace) > score(current)) byKey.set(key, cleanedPlace);
  }
  return [...byKey.values()].sort((a, b) => score(b) - score(a)).slice(0, 60);
}

function score(place) {
  return (Number(place.visitScore) || 0) + (Number(place.openingScore) || 0) + (Number(place.trafficScore) || 0);
}

const existing = await readExisting();
const discovered = [];
const errors = [];

for (const source of sources) {
  try {
    const html = await fetchSource(source);
    discovered.push(...extractCandidates(html, source));
  } catch (error) {
    errors.push(`${source.name}: ${error.message}`);
  }
}

const places = mergePlaces(existing, discovered);
await fs.mkdir(new URL("../data/", import.meta.url), { recursive: true });
await fs.writeFile(
  DATA_FILE,
  `${JSON.stringify(
    {
      updatedAt: new Date().toISOString(),
      sourceCount: sources.length,
      discoveredCount: discovered.length,
      errors,
      places
    },
    null,
    2
  )}\n`
);

console.log(`Updated ${places.length} restaurants from ${discovered.length} discovered candidates.`);
if (errors.length) console.warn(errors.join("\n"));
