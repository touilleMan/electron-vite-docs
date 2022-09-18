import { defineConfig, DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: '指南',
      items: [
        { text: '简介', link: '/guide/introduction' },
        { text: '快速开始', link: '/guide/' },
        { text: '功能', link: '/guide/features' },
        { text: '命令行界面', link: '/guide/cli' },
        { text: '项目结构', link: '/guide/project-structure' },
        { text: '渲染进程 HMR', link: '/guide/hmr-in-renderer' },
        { text: '热重载', link: '/guide/hot-reloading' },
        { text: '源代码保护', link: '/guide/source-code-protection' },
        { text: '构建生产版本', link: '/guide/build' },
        { text: '环境变量和模式', link: '/guide/env-and-mode' },
        { text: '多窗口配置', link: '/guide/mutli-windows' },
        { text: 'VSCode 调试', link: '/guide/debugging' }
      ]
    },
    {
      text: '配置',
      items: [{ text: '配置参考', link: '/config/' }]
    },
    {
      text: 'API',
      items: [{ text: 'API 索引', link: '/api/' }]
    }
  ]
}

const nav: DefaultTheme.NavItem[] = [
  {
    text: '指南',
    link: '/guide/',
    activeMatch: '^/guide|api|about/'
  },
  { text: '配置', link: '/config/', activeMatch: '^/config/' },
  {
    text: '链接',
    items: [
      { text: 'Vite', link: 'https://cn.vitejs.dev/' },
      {
        text: 'create-electron',
        link: 'https://github.com/alex8088/quick-start/tree/master/packages/create-electron'
      }
    ]
  },
  {
    text: 'v1.0.9',
    items: [
      {
        text: '更新日志',
        link: 'https://github.com/alex8088/electron-vite/blob/master/CHANGELOG.md'
      }
    ]
  }
]

export default defineConfig({
  lang: 'en-US',
  title: 'electron-vite',
  description: 'Next generation Electron build tooling based on Vite.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],
  srcDir: 'docs',
  lastUpdated: true,
  themeConfig: {
    algolia: {
      appId: '',
      apiKey: '',
      indexName: ''
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/alex8088/electron-vite'
      }
    ],
    localeLinks: {
      text: '简体中文',
      items: [{ text: 'English', link: 'https://evite.netlify.app/' }]
    },
    logo: '/favicon.svg',
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2022-present Alex Wei & Powered by Vite'
    },
    nav,
    sidebar
  }
})
