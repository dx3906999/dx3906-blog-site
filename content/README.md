# 内容

- `zh/posts/`：中文文章，每篇一个目录，入口是 `index.md`
- `zh/pages/`：中文页面
- `en/posts/`：英文文章
- `en/pages/`：英文页面

新建文章：

```bash
npx blog-engine new "标题" --slug hello-world --lang zh --tags 工程,笔记
```

文章目录里的图片会被复制到输出目录，Markdown 用相对路径引用。frontmatter 规则见引擎仓库的 `docs/authoring.md`。

当前仓库没有示例文章，首页会显示空状态。添加第一篇后运行：

```bash
npx blog-engine check
```
