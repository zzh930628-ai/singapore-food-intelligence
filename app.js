let places = [];

const fallbackPlaces = [
  {
    "name": "Milli Sky Dining",
    "category": [
      "local_chinese",
      "fine_dining"
    ],
    "typeLabel": "本地创意菜 / Fine dining",
    "area": "National Gallery",
    "opened": "2026-06",
    "spend": "$$$",
    "visitScore": 94,
    "openingScore": 98,
    "trafficScore": 96,
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    "hook": "国家美术馆屋顶、夜景视野、本地风味重新演绎。",
    "shootFor": [
      "探店",
      "约会",
      "夜景"
    ],
    "prediction": "未来两周有机会成为高级约会餐厅热门打卡点。",
    "why": "很适合做“新加坡约会餐厅”“带外地朋友吃什么”的视觉型笔记，场景辨识度强。",
    "angle": "标题角度：国家美术馆屋顶新餐厅，夜景 + 新加坡味道值不值得冲",
    "proof": "Time Out 6 月新店榜提到它是 National Gallery rooftop 新餐厅。",
    "source": "https://www.timeout.com/singapore/news/5-new-restaurants-in-singapore-to-check-out-this-june-2026-060126"
  },
  {
    "name": "Torikizoku",
    "category": [
      "japan_korea"
    ],
    "typeLabel": "日韩餐",
    "area": "VivoCity",
    "opened": "2026-06",
    "spend": "$",
    "visitScore": 93,
    "openingScore": 99,
    "trafficScore": 95,
    "image": "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80",
    "hook": "日本 600+ 门店烤鸡串连锁，新加坡首店，统一低价。",
    "shootFor": [
      "排队实测",
      "性价比",
      "朋友聚餐"
    ],
    "prediction": "首店话题强，适合抢第一波排队和价格测评流量。",
    "why": "品牌自带话题，新加坡首店 + VivoCity 人流 + 低价菜单，容易做排队实测和避雷测评。",
    "angle": "标题角度：日本烤串王开到 VivoCity，$3.90 两串到底香不香",
    "proof": "Time Out 6 月新店榜称 VivoCity 店是 Torikizoku 新加坡店。",
    "source": "https://www.timeout.com/singapore/news/5-new-restaurants-in-singapore-to-check-out-this-june-2026-060126"
  },
  {
    "name": "Mimmo Bakery Cafe",
    "category": [
      "bakery",
      "cafe"
    ],
    "typeLabel": "面包店 / 咖啡馆",
    "area": "Asia Square Tower 1",
    "opened": "2026-06-02",
    "spend": "$$",
    "visitScore": 90,
    "openingScore": 100,
    "trafficScore": 91,
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "hook": "CBD 新面包咖啡店，香港 Quarry Bay 品牌背景。",
    "shootFor": [
      "早餐",
      "咖啡",
      "打工人路线"
    ],
    "prediction": "CBD 受众精准，工作日早午餐内容有稳定收藏潜力。",
    "why": "上班族场景强，适合做“CBD 早餐/午休咖啡”路线，面包和咖啡都容易拍出食欲感。",
    "angle": "标题角度：Asia Square 新开面包咖啡店，CBD 打工人早餐有新选择",
    "proof": "Great New Places 6 月 2 日记录 Mimmo Bakery Cafe 在 Asia Square Tower 1 开业。",
    "source": "https://greatnewplaces.com/"
  },
  {
    "name": "VISITORS",
    "category": [
      "cafe",
      "japan_korea"
    ],
    "typeLabel": "咖啡馆 / 韩系",
    "area": "Tanjong Pagar",
    "opened": "2026-06-02",
    "spend": "$$",
    "visitScore": 89,
    "openingScore": 100,
    "trafficScore": 94,
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
    "hook": "Tanjong Pagar 新韩系咖啡馆，主打 Seoul contemporary cafe 质感。",
    "shootFor": [
      "穿搭",
      "闺蜜聚会",
      "咖啡"
    ],
    "prediction": "韩系咖啡馆适配小红书审美，封面好看就有机会起量。",
    "why": "韩系咖啡馆天然适合小红书封面，目标受众明确，适合做穿搭 + 咖啡 + 周末路线。",
    "angle": "标题角度：Tanjong Pagar 新韩系咖啡馆，像不像飞去首尔",
    "proof": "Great New Places 6 月 2 日发布 VISITORS 新开消息。",
    "source": "https://greatnewplaces.com/"
  },
  {
    "name": "Satori",
    "category": [
      "japan_korea"
    ],
    "typeLabel": "日韩餐",
    "area": "Amoy Street",
    "opened": "2026-06",
    "spend": "$$",
    "visitScore": 88,
    "openingScore": 97,
    "trafficScore": 88,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    "hook": "Amoy Street 新烧鸟店，深红灯光和 $3.80 起串烧。",
    "shootFor": [
      "宵夜",
      "下班小酌",
      "朋友聚餐"
    ],
    "prediction": "夜间氛围和低价串烧能做强标题，但需要现场灯光拍好。",
    "why": "画面有夜间氛围，价格切入点清楚，适合下班小酌、约会、朋友聚餐三种选题。",
    "angle": "标题角度：Amoy Street 新烧鸟店，$3.80 起能不能吃爽",
    "proof": "The Ranting Panda 6 月新店提到 Satori 在 Amoy Street 新开。",
    "source": "https://therantingpanda.com/2026/06/01/food-scoops-new-and-buzzing-singapore-restaurants-in-june-2026/"
  },
  {
    "name": "Jiin Omakase",
    "category": [
      "fine_dining",
      "michelin",
      "japan_korea"
    ],
    "typeLabel": "Fine dining / 米其林背景 / 日料",
    "area": "Shaw Centre",
    "opened": "2026-05-08",
    "spend": "$$$$",
    "visitScore": 87,
    "openingScore": 86,
    "trafficScore": 82,
    "image": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=900&q=80",
    "hook": "Les Amis Group 新 omakase，午餐 $138++ 起，强调 omotenashi。",
    "shootFor": [
      "纪念日",
      "高端日料",
      "预算测评"
    ],
    "prediction": "收藏价值高，但客单价高，流量更偏精准高消费人群。",
    "why": "米其林集团背书强，适合做高端日料、纪念日、预算分层测评，收藏价值高。",
    "angle": "标题角度：Les Amis Group 新 omakase，$138++ 午餐值不值得订",
    "proof": "The Ordinary Patrons 记录其 2026 年 5 月 8 日开业；HungryGoWhere 提到 Les Amis 旗舰有三星背景。",
    "source": "https://ordinarypatrons.com/new-restaurants-in-singapore/"
  },
  {
    "name": "ASIN",
    "category": [
      "fine_dining",
      "local_chinese"
    ],
    "typeLabel": "Fine dining / 亚洲创意",
    "area": "Carpenter Street",
    "opened": "2026-05-06",
    "spend": "$$$$",
    "visitScore": 86,
    "openingScore": 84,
    "trafficScore": 80,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    "hook": "Chef Ace Tan 新 fine dining，Progressive Asian Cuisine。",
    "shootFor": [
      "主厨故事",
      "Fine dining",
      "纪念日"
    ],
    "prediction": "适合深度内容，爆发力取决于菜品摆盘和主厨故事剪辑。",
    "why": "厨师故事线、发酵腌渍技法和亚洲风味重构，都适合做深度探店内容。",
    "angle": "标题角度：Carpenter Street 新亚洲 fine dining，8 道菜单吃什么",
    "proof": "The Ordinary Patrons 记录 ASIN 于 2026 年 5 月 6 日开业。",
    "source": "https://ordinarypatrons.com/new-restaurants-in-singapore/"
  },
  {
    "name": "People People Brewing Co.",
    "category": [
      "michelin",
      "western"
    ],
    "typeLabel": "米其林背景 / 西餐",
    "area": "Resorts World Sentosa",
    "opened": "2026-05",
    "spend": "$$$",
    "visitScore": 85,
    "openingScore": 82,
    "trafficScore": 84,
    "image": "https://images.unsplash.com/photo-1532635224-cf024e66d122?auto=format&fit=crop&w=900&q=80",
    "hook": "Burnt Ends 背景人物参与，鲜啤 + wood-fired food。",
    "shootFor": [
      "周末路线",
      "啤酒",
      "Sentosa"
    ],
    "prediction": "米其林背景加 Sentosa 路线适合做周末合集。",
    "why": "米其林背景、啤酒厂、炭火菜和 Sentosa 目的地属性叠加，适合做周末路线。",
    "angle": "标题角度：Sentosa 新鲜啤酒餐厅，Burnt Ends 背景到底强在哪",
    "proof": "The Ordinary Patrons 提到项目与 Burnt Ends 的 Dave Pynt 等餐饮人有关。",
    "source": "https://ordinarypatrons.com/new-restaurants-in-singapore/"
  },
  {
    "name": "Mary Grace Singapore",
    "category": [
      "cafe",
      "bakery"
    ],
    "typeLabel": "咖啡馆 / 面包甜点",
    "area": "Tras Street",
    "opened": "2026-05",
    "spend": "$$",
    "visitScore": 84,
    "openingScore": 80,
    "trafficScore": 86,
    "image": "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80",
    "hook": "菲律宾 bakery-cafe 海外首店，Ensaymada、Cheese Roll 和新加坡限定口味。",
    "shootFor": [
      "甜品",
      "闺蜜聚会",
      "限定口味"
    ],
    "prediction": "海外首店和限定口味有标题优势，适合做甜品试吃合集。",
    "why": "海外首店 + 限定口味很适合小红书标题，甜点视觉也适合封面。",
    "angle": "标题角度：菲律宾人气 bakery-cafe 来新加坡，限定 Kaya Pandan 值得买吗",
    "proof": "The Ordinary Patrons 写到它是菲律宾 bakery-cafe chain 的 first international outlet。",
    "source": "https://ordinarypatrons.com/new-restaurants-in-singapore/"
  },
  {
    "name": "Seoul & So",
    "category": [
      "japan_korea"
    ],
    "typeLabel": "日韩餐",
    "area": "National Gallery",
    "opened": "2026-05",
    "spend": "$$$",
    "visitScore": 83,
    "openingScore": 79,
    "trafficScore": 81,
    "image": "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=900&q=80",
    "hook": "National Gallery 韩式烤肉，Hanwoo、Handon、Wagyu 多肉种。",
    "shootFor": [
      "韩餐",
      "聚餐",
      "美术馆路线"
    ],
    "prediction": "烤肉画面有食欲，适合多人局，但要避开同质化韩烤内容。",
    "why": "地段高级，烤肉画面有食欲，适合做“美术馆附近吃什么”和多人聚餐内容。",
    "angle": "标题角度：National Gallery 新韩牛烤肉，午餐 set 从 $35 起",
    "proof": "The Ordinary Patrons 记录 Seoul & So 位于 National Gallery Level 5。",
    "source": "https://ordinarypatrons.com/new-restaurants-in-singapore/"
  },
  {
    "name": "Bouillon Gavroche",
    "category": [
      "western"
    ],
    "typeLabel": "西餐",
    "area": "Mandarin Gallery",
    "opened": "2026-05",
    "spend": "$$",
    "visitScore": 82,
    "openingScore": 78,
    "trafficScore": 79,
    "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80",
    "hook": "传统巴黎 Bouillon 风格，主打亲民法餐和 walk-in。",
    "shootFor": [
      "法餐入门",
      "Orchard",
      "约会"
    ],
    "prediction": "概念有新鲜感，适合做“亲民法餐”教育型内容。",
    "why": "“新加坡第一家传统巴黎 Bouillon”这个概念适合教育型笔记，价格也比较容易让粉丝行动。",
    "angle": "标题角度：Orchard 新开亲民法餐，不预约也能吃的巴黎食堂",
    "proof": "The Ordinary Patrons 称其为 Singapore's first traditional Parisian Bouillon。",
    "source": "https://ordinarypatrons.com/new-restaurants-in-singapore/"
  },
  {
    "name": "Chimi's Especial",
    "category": [
      "western"
    ],
    "typeLabel": "西餐 / 拉美",
    "area": "Collyer Quay",
    "opened": "2026-05",
    "spend": "$$",
    "visitScore": 81,
    "openingScore": 77,
    "trafficScore": 78,
    "image": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    "hook": "Customs House 海湾位置，南美菜、Peruvian rotisserie chicken、Argentinian grill。",
    "shootFor": [
      "海景",
      "下班晚餐",
      "小酌"
    ],
    "prediction": "海景是流量点，建议傍晚去拍，画面会比纯菜品更强。",
    "why": "海景 + 拉美菜 + 下班后饮食场景，适合做 CBD 晚餐和 waterfront 小酌攻略。",
    "angle": "标题角度：Collyer Quay 新拉美餐厅，海湾边吃烤鸡和牛排",
    "proof": "The Ordinary Patrons 记录 Chimi's Especial 位于 Customs House。",
    "source": "https://ordinarypatrons.com/new-restaurants-in-singapore/"
  },
  {
    "name": "Tiong Bahru Bakery Raffles City",
    "category": [
      "bakery",
      "cafe"
    ],
    "typeLabel": "面包店 / 咖啡馆",
    "area": "Raffles City",
    "opened": "2026-05-31",
    "spend": "$$",
    "visitScore": 80,
    "openingScore": 94,
    "trafficScore": 83,
    "image": "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=900&q=80",
    "hook": "Raffles City 门店翻新重开，新甜点线和新概念。",
    "shootFor": [
      "新品测评",
      "甜点",
      "咖啡"
    ],
    "prediction": "品牌熟悉度高，适合做新品测评，但需要突出新甜点线避免像普通探店。",
    "why": "虽然不是全新品牌，但新甜点线适合做“老牌面包店新品测评”，粉丝接受门槛低。",
    "angle": "标题角度：Tiong Bahru Bakery Raffles City 回归，新甜点线哪些值得买",
    "proof": "Great New Places 5 月 31 日记录 Raffles City outlet reopened；The Ranting Panda 提到新 pastry line-up。",
    "source": "https://greatnewplaces.com/"
  }
];

const feed = document.querySelector("#feed");
const tabs = document.querySelectorAll(".tabs button");
const heroPick = document.querySelector("#heroPick");
const heroReason = document.querySelector("#heroReason");
const candidateCount = document.querySelector("#candidateCount");
const priorityCount = document.querySelector("#priorityCount");
const shootPlan = document.querySelector("#shootPlan");
const topFiveButton = document.querySelector("#topFiveButton");
const refreshFeed = document.querySelector("#refreshFeed");

let currentFilter = "all";
let topFiveOnly = false;

function safeText(value, fallback = "") {
  return String(value ?? fallback)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizePlace(place) {
  return {
    name: place.name || "未命名餐厅",
    category: Array.isArray(place.category) && place.category.length ? place.category : ["western"],
    typeLabel: place.typeLabel || "新店",
    area: place.area || "Singapore",
    opened: place.opened || "近期",
    spend: place.spend || "$$",
    visitScore: Number(place.visitScore) || 70,
    openingScore: Number(place.openingScore) || 70,
    trafficScore: Number(place.trafficScore) || 70,
    image: place.image || "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
    hook: place.hook || "近期被多个公开来源提到的新餐饮地点。",
    shootFor: Array.isArray(place.shootFor) && place.shootFor.length ? place.shootFor : ["探店"],
    prediction: place.prediction || "建议先观察社媒声量，再决定是否抢拍。",
    why: place.why || "适合作为候选线索，需要进一步查看菜单、环境和评论。",
    angle: place.angle || `标题角度：${place.name || "这家新店"} 值不值得去`,
    proof: place.proof || "来自公开网页自动采集。",
    source: place.source || "#"
  };
}

async function loadPlaces() {
  try {
    const response = await fetch(`./data/restaurants.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Data file not available");
    const data = await response.json();
    if (!Array.isArray(data.places) || data.places.length === 0) throw new Error("No places in data file");
    places = data.places.map(normalizePlace);
  } catch (error) {
    places = fallbackPlaces.map(normalizePlace);
  }
}

function scoreClass(score) {
  if (score >= 90) return "hot";
  if (score >= 82) return "warm";
  return "steady";
}

function totalScore(place) {
  return place.visitScore + place.openingScore + place.trafficScore;
}

function getVisiblePlaces(filter = "all") {
  return (filter === "all" ? places : places.filter((place) => place.category.includes(filter))).sort(
    (a, b) => b.visitScore + b.openingScore + b.trafficScore - (a.visitScore + a.openingScore + a.trafficScore)
  );
}

function renderPlaces(filter = "all") {
  const allVisible = getVisiblePlaces(filter);
  const visible = topFiveOnly ? allVisible.slice(0, 5) : allVisible;
  const topPlace = allVisible[0];

  heroPick.textContent = topPlace?.name || "暂无推荐";
  heroReason.textContent = topPlace
    ? `${topPlace.hook} 综合分 ${totalScore(topPlace)}，建议优先安排。`
    : "当前分类暂无候选，切换到全部查看。";
  candidateCount.textContent = allVisible.length;
  priorityCount.textContent = allVisible.filter((place) => totalScore(place) >= 280).length;
  shootPlan.textContent =
    allVisible[0]?.trafficScore >= 94
      ? "先抢高流量新店，适合当天出封面和短视频。"
      : "先拍高确定性餐厅，再补小众收藏型内容。";
  topFiveButton.textContent = topFiveOnly ? "查看全部候选" : "只看今日 Top 5";

  feed.innerHTML = visible
    .map(
      (place) => `
        <article class="place-card">
          <div class="rank-ribbon">#${allVisible.indexOf(place) + 1} · 综合 ${totalScore(place)}</div>
          <img src="${safeText(place.image)}" alt="${safeText(place.name)}">
          <div class="place-body">
            <div class="place-head">
              <div>
                <p class="card-kicker">${safeText(place.typeLabel)}</p>
                <h3>${safeText(place.name)}</h3>
                <div class="meta">
                  <span>${safeText(place.area)}</span>
                  <span>开业 ${safeText(place.opened)}</span>
                  <span>${safeText(place.spend)}</span>
                </div>
              </div>
            </div>
            <div class="score-grid">
              <div class="score-pill ${scoreClass(place.visitScore)}">
                <span>值得探店</span>
                <strong>${place.visitScore}</strong>
              </div>
              <div class="score-pill ${scoreClass(place.openingScore)}">
                <span>新店开业</span>
                <strong>${place.openingScore}</strong>
              </div>
              <div class="score-pill ${scoreClass(place.trafficScore)}">
                <span>流量机会</span>
                <strong>${place.trafficScore}</strong>
              </div>
            </div>
            <div class="hook-box">
              <span>核心卖点</span>
              <p>${safeText(place.hook)}</p>
            </div>
            <div class="shoot-tags">
              <span>适合拍</span>
              ${place.shootFor.map((tag) => `<b>${safeText(tag)}</b>`).join("")}
            </div>
            <p class="take">${safeText(place.why)}</p>
            <div class="prediction-box">
              <span>AI 预测</span>
              <p>${safeText(place.prediction)}</p>
            </div>
            <div class="angle-box">
              <span>小红书选题</span>
              <p>${safeText(place.angle)}</p>
            </div>
            <p class="proof">${safeText(place.proof)}</p>
            <div class="card-actions">
              <a href="${safeText(place.source)}" target="_blank">看来源</a>
              <button type="button" data-save="${safeText(place.name)}">收藏</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    currentFilter = tab.dataset.filter;
    renderPlaces(currentFilter);
  });
});

feed.addEventListener("click", (event) => {
  const button = event.target.closest("[data-save]");
  if (!button) return;
  button.classList.toggle("saved");
  button.textContent = button.classList.contains("saved") ? "已收藏" : "收藏";
});

topFiveButton.addEventListener("click", () => {
  topFiveOnly = !topFiveOnly;
  renderPlaces(currentFilter);
});

refreshFeed.addEventListener("click", () => {
  refreshFeed.classList.add("spinning");
  loadPlaces()
    .then(() => renderPlaces(currentFilter))
    .finally(() => window.setTimeout(() => refreshFeed.classList.remove("spinning"), 500));
});

loadPlaces().then(() => renderPlaces());
