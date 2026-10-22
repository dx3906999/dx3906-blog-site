# dx3906-blog-site

个人博客站点仓库，使用 [`blog-engine`](https://github.com/dx3906999/blog-engine) 构建。引擎、内置主题和检查工具都在依赖里，这个仓库只放内容和配置。

## 本地运行

```bash
npm ci
npm run dev
```

打开 `http://localhost:4000/`。

## 写作

```bash
npx blog-engine new "标题" --slug hello-world --lang zh --tags 工程,笔记
```

- 中文内容：`content/zh/`
- 英文内容：`content/en/`
- 页面：`content/<lang>/pages/`

## 构建

```bash
npm run build          # 只生成 dist/
npm run build:all      # 构建、链接/SEO/主题检查、Pagefind 索引
npm run preview        # 本地预览 dist/
```

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 会部署到 GitHub Pages。仓库 Settings → Pages 的 Source 需要设置为 **GitHub Actions**。

部署路径是 `https://dx3906999.github.io/dx3906-blog-site/`。如果你想用自定义域名，在 `site.config.ts` 设置 `site.customDomain`，构建会生成 `dist/CNAME`。

## 配置

站点标题、作者、语言、主题、导航和许可证都在 `site.config.ts`。主题可选：

- `folio`：编辑排版
- `orbital`：复古未来主义
- `scholar`：学术

```ts
theme: { name: 'scholar', config: {} }
```
