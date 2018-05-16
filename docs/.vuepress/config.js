module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Leon Werth',
      description: 'This is my doce, believe it or not.'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'buildlove/vuepress-docs',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '技能树',
            link: '/zh/guide/',
          },
          {
            text: '前端',
            link: '/zh/frontend/'
          },
          {
            text: '服务器',
            link: '/zh/serverside/'
          },
          {
            text: '其他相关',
            link: '/zh/about/'
          }
        ],
        sidebar: {
          '/zh/frontend/': genSidebarFontEnd(),
          '/zh/serverside/': genSidebarServerSide()
        }
      }
    }
  }
}

function genSidebarFontEnd (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'vue'
        // ,
        // 'html',
        // 'javascript',
        // 'css'
      ]
    }
  ]
}

function genSidebarServerSide(title) {
  return [
    {
      title,
      collapsable: false,
      children: []
    }
  ]
}