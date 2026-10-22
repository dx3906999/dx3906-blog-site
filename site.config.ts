import { defineConfig } from 'blog-engine/config'

export default defineConfig({
  identity: {
    author: {
      name: 'dx3906',
      email: '',
      url: '',
      avatar: '',
    },
    social: [{ label: 'GitHub', url: 'https://github.com/dx3906999' }],
    repository: { owner: 'dx3906999', name: 'dx3906-blog-site' },
  },
  locales: {
    default: 'zh',
    entries: {
      zh: {
        label: '中文',
        title: 'dx3906 的博客',
        description: '关于工程、排版和长期维护的笔记。',
        tagline: '写具体的问题，做能复用的东西。',
      },
      en: {
        label: 'English',
        title: "dx3906's Blog",
        description: 'Notes on engineering, typography, and maintenance.',
        tagline: 'Concrete problems, reusable tools.',
      },
    },
  },
  site: {
    url: 'http://localhost:4000',
    base: '/',
    timezone: 'Asia/Shanghai',
    license: {
      code: 'MIT',
      content: 'CC BY-NC-SA 4.0',
    },
  },
  theme: {
    name: 'folio',
    config: {},
  },
  nav: [
    { key: 'home', path: '/' },
    { key: 'archives', path: '/archives/' },
    { key: 'tags', path: '/tags/' },
    { key: 'about', path: '/about/' },
  ],
  pagination: {
    perPage: 10,
  },
  features: {
    search: true,
    math: true,
  },
})
