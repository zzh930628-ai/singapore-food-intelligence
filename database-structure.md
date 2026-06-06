# Singapore Food Intelligence 数据库结构

这份结构适合先放在 Notion 或 Airtable，后续再迁到 Supabase / Postgres。

## 1. 餐厅表 Restaurants

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| name | 文本 | 餐厅名 |
| normalized_name | 文本 | 去重用标准名 |
| category | 多选 | 中餐、咖啡馆、Bakehouse、日韩餐、Fine dining、米其林背景、西餐 |
| sub_category | 多选 | 湘菜、川菜、粤菜、韩系咖啡、酸种、Omakase、法国菜等 |
| area | 文本 | 区域，如 Tanjong Pagar、Orchard、VivoCity |
| address | 文本 | 完整地址 |
| google_place_id | 文本 | Google Maps 识别 ID |
| opening_date | 日期 | 估算或确认开业日期 |
| opening_status | 单选 | 即将开业、新开业、翻新重开、新菜单、已稳定 |
| price_level | 单选 | $、$$、$$$、$$$$ |
| core_hook | 文本 | 核心卖点 |
| shoot_for | 多选 | 探店、穿搭、闺蜜聚会、宵夜、约会、打工人午餐、纪念日 |
| source_urls | URL 列表 | 媒体、官网、IG、Google Maps 来源 |
| status | 单选 | 候选、待验证、建议去拍、已拍、跳过 |

## 2. 指标采集表 Signals

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| restaurant | 关联 | 对应餐厅 |
| snapshot_date | 日期 | 采集日期 |
| google_rating | 数字 | Google 评分 |
| google_review_count | 数字 | Google 评论数量 |
| google_review_growth_7d | 数字 | 7 天评论增长 |
| xhs_post_count | 数字 | 小红书相关帖子数 |
| xhs_engagement_rate | 数字 | 小红书互动率 |
| xhs_post_growth_7d | 数字 | 7 天小红书帖子增长 |
| instagram_mentions | 数字 | IG 提及数量 |
| instagram_growth_7d | 数字 | 7 天 IG 增长 |
| visual_score | 数字 | AI 图片识别后的出片/菜品卖相分 |
| uniqueness_score | 数字 | 独特卖点分 |
| competition_score | 数字 | 同类内容竞争强度，越高代表越卷 |

## 3. 指数计算表 Scores

| 字段 | 类型 | 公式说明 |
| --- | --- | --- |
| restaurant | 关联 | 对应餐厅 |
| score_date | 日期 | 计算日期 |
| new_opening_score | 数字 | 开业时间 40% + 小红书帖子少 20% + Google 评论增长 20% + IG 提及增长 20% |
| worth_visiting_score | 数字 | Google 评分 20% + 评论数量 10% + 菜品卖相 20% + 小红书互动率 20% + IG 互动率 10% + 独特卖点 10% + 出片率 10% |
| traffic_opportunity_score | 数字 | 装修视觉 25% + 颜色/封面冲击 15% + 小红书增长 25% + 低竞争 20% + 话题钩子 15% |
| final_priority_score | 数字 | 新店开业 35% + 值得探店 35% + 流量机会 30% |
| ai_prediction | 文本 | AI 预测两周内是否值得抢拍 |
| recommendation | 单选 | 今天拍、本周拍、观察、跳过 |

## 4. AI 点评模板 Reviews

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| restaurant | 关联 | 对应餐厅 |
| one_line_reason | 文本 | 一句话推荐理由 |
| core_selling_points | 文本 | 3 个核心卖点 |
| xhs_title_ideas | 文本 | 小红书标题方向 |
| shot_list | 文本 | 必拍镜头：门头、招牌菜、环境、价格、菜单等 |
| risk_notes | 文本 | 风险：太贵、太暗、排队久、同质化高 |
| creator_brief | 文本 | 给博主出门前看的简短攻略 |

## 5. 手机首页布局

1. 顶部：今日最值得冲的餐厅
2. 三个指数：新店开业、值得探店、流量机会
3. 分类横滑：中餐、咖啡馆、Bakehouse、日韩餐、Fine dining、米其林背景、西餐
4. 餐厅卡片：店名、区域、开业日期、三个指数、核心卖点、适合拍、AI 预测、来源
5. 底部：推送偏好和数据来源状态

## 6. 采集优先级

第一阶段先接：公开媒体新店榜、Google Maps、餐厅官网、Instagram 官方账号。

第二阶段再接：小红书搜索结果、博主笔记互动、短视频平台声量。

第三阶段做：自动推送 Top 5、重复餐厅去重、已拍/未拍状态追踪。
