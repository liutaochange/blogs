module.exports = {
    dest: 'vuepress',
    port: 5566,
    base: '/',
    title: 'Liutao',
    description: 'stay hungry stay foolish',
    head: [
        ['link', {rel: 'icon', href: `/logo.png`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png`}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
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
                text: 'blogs',
                items: [
                    {text: 'javascript', link: '/blogs/javascript/es6 class详解'},
                    {text: 'css', link: '/blogs/css/css/垂直居中的常用方式'},
                    {text: 'html', link: '/blogs/html/'},
                    {text: 'canvas', link: '/blogs/canvas/'},
                    {text: 'nodejs', link: '/blogs/nodejs/koa学习'}
                ]
            },
            {
                text: 'project',
                link: '/project/'
            },
            {
                text: 'about me',
                link: '/about/'
            }
        ],
        sidebar: [
            {
                title: 'javascript',
                collapsable: true, // 可折叠
                children: [
                    '/blogs/javascript/es6 class详解',
                    '/blogs/javascript/类数组转化为数组的方式'
                ]
            },
            {
                title: 'css',
                collapsable: true,
                children: [
                    '/blogs/css/垂直居中的常用方式',
                ]
            },
            {
                title: 'nodejs',
                collapsable: true,
                children: [
                    '/blogs/nodejs/koa学习',
                ]
            },
            {
                title: 'canvas',
                collapsable: true,
                children: [
                    '/blogs/canvas/认识HTTP-Cookie和Session篇',
                ]
            },
        ]
    }
}
