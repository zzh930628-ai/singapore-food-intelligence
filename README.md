# Singapore Food Intelligence

手机端新加坡探店 Dashboard，帮助小红书美食博主判断“今天去哪拍”。

## 功能

- 新店开业指数
- 值得探店指数
- 流量机会指数
- 分类筛选：中餐、咖啡馆、Bakehouse、Fine dining、米其林背景、日韩餐、西餐
- 每日自动更新数据文件

## 每日自动更新

GitHub Actions 会在每天 02:00 UTC 运行，也就是新加坡时间上午 10 点。

流程：

1. 抓取公开新店来源
2. 自动去重和分类
3. 计算三个指数
4. 更新 `data/restaurants.json`
5. 自动提交到 GitHub
6. Vercel 自动重新部署

也可以在 GitHub 的 Actions 页面手动运行 `Update restaurant data`。

## 本地运行

```bash
python3 -m http.server 4173
```

然后打开：

```text
http://localhost:4173
```

## 手动更新数据

```bash
node scripts/update-restaurants.mjs
```
