# 部署到 Vercel

目标：得到一个手机可以每天直接打开的网址，例如：

```text
https://singapore-food-intelligence.vercel.app
```

## 最推荐做法：GitHub + Vercel

### 1. 创建 GitHub 仓库

1. 打开 https://github.com
2. 新建一个 repository
3. 名字可以叫 `singapore-food-intelligence`
4. 选择 Public 或 Private 都可以

### 2. 上传这些文件

把当前文件夹里的这些文件上传到 GitHub 仓库：

```text
index.html
styles.css
app.js
vercel.json
database-structure.md
```

真正展示 Dashboard 的前三个文件是：

```text
index.html
styles.css
app.js
```

### 3. 在 Vercel 导入项目

1. 打开 https://vercel.com
2. 用 GitHub 登录
3. 点击 Add New Project
4. 选择 `singapore-food-intelligence` 这个仓库
5. Framework Preset 选择 Other 或保持默认
6. Build Command 留空
7. Output Directory 留空
8. 点击 Deploy

Vercel 官方文档说明，已有项目可以通过 Import Git Repository 导入，静态 HTML/CSS/JS 项目也可以部署。

参考：https://vercel.com/docs/getting-started-with-vercel/import

### 4. 手机访问

部署成功后，Vercel 会给你一个网址。手机直接打开这个网址，再添加到主屏幕即可。

## 后续更新

以后只要更新 GitHub 仓库里的文件，Vercel 会自动重新部署。

## 什么时候需要后端

当前 Dashboard 是静态版，适合手机查看。

如果以后要做每日自动抓取新店、自动计算指数、自动刷新数据，就需要再加：

- 每日采集任务
- 数据库
- 指数计算脚本
- API 接口

这一步可以继续用 Vercel + 定时任务，或者改用 Supabase / Cloudflare Workers。
