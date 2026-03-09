import { defineConfig } from 'vitepress'
import { zh } from './zh.mts'
import { en } from './en.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/algorithm',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/algorithm/favicon.ico' }],
  ],

  rewrites: {
    'zh/:rest*': ':rest*'
  },

  locales: {
    root: zh,
    en: en
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/honkinglin/algorithm' }
    ]
  }
})
