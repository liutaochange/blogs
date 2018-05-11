module.exports = {
  dest: 'vuepress',
  port: 5566,
  base: '/',
  title: 'vuepress',
  description: 'Vue 驱动的静态网站生成器',
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
  themeConfig: {
    repo: 'liutaochange/blogs',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
          text: '指南',
          link: '/guide/',
      },
      {
          text: '配置',
          link: '/config/'
      },
      {
          text: '默认主题',
          link: '/default-theme-config/'
      }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('指南')
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
