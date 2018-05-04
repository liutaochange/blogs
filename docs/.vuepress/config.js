module.exports = {
    title: 'blogs',
    dest: './dist',   // 设置输出目录
    repo: 'https://github.com/liutaochange/blogs', // 添加 github 链接
    description: 'web, js, html5, node, es6, vue, react',
    themeConfig: {
        // 添加导航栏
        nav: [
            { text: 'vue', link: '/' },
            { text: 'css', link: '/blog/' },
            { text: 'js', link: '/zhihu/' },
            {
                text: 'github',
                // 这里是下拉列表展现形式。
                items: [
                    { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
                    { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
                ]
            }
        ],
        // 为以下路由添加侧边栏
        sidebar: ['/', '/git', '/vue']
    }
}