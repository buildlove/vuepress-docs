module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Leon_Werth的学习笔记',
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
    // repo: 'buildlove/vuepress-docs',
    // editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        // editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '学习笔记',
            link: '/zh/guide/',
          },
          {
            text: '程序人生',
            link: '/zh/frontendbasics/'
          },
          // {
          //   text: '服务器',
          //   link: '/zh/serverside/'
          // },
          {
            text: '其他相关',
            link: '/zh/about/'
          }
        ],
        sidebar: {
          // '/zh/serverside/': genSidebarServerSide(),
          '/zh/frontendbasics/': genSidebarFontEnd(),
        }
      }
    }
  }
}

function genSidebarFontEnd() {
  let result = [
    {
      title: '前端基础',
      collapsable: false,
      children: [
        'css',
        'es6',
        'modulecommon'
      ]
    },{
      title: '前端插件',
      collapsable: false,
      children: [
      ]
    }, {
      title: '前端框架',
      collapsable: false,
      children: [
        'vue',
        'component',
        'compare'
      ]
    }, {
      title: '前端工具',
      collapsable: false,
      children: [
        'webpack',
      ]
    }
  ]

  return result
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