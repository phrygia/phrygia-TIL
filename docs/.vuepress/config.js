module.exports = {
    title: 'Today phrygia Learned',
    description: '',
    head: [
        [
            'link',
            {
                rel: 'stylesheet',
                href: `../styles/index.styl`,
            },
        ],
    ],
    plugins: [],
    base: '/phrygia-TIL/',
    themeConfig: {
        lastUpdated: 'Last Updated',
        docsDir: 'docs',
        nav: [
            { text: 'Github', link: 'https://github.com/phrygia' },
            { text: 'Blog', link: 'https://phrygia.github.io/' },
        ],
        sidebar: [
            ['/', 'HOME'],
            {
                title: 'Web',
                // path: "/git/gits/",
                collapsable: false,
                sidebarDepth: 1,
                children: ['/web/browsers-repository'],
            },
            {
                title: 'Git',
                collapsable: false,
                sidebarDepth: 1,
                children: ['/git/git-basic'],
            },
            // {
            //     title: 'Other',
            //     collapsable: false,
            //     sidebarDepth: 1,
            //     children: ['/other/about'],
            // },
        ],
        toggleSidebar: 'toggle sidebar',
        toggleDarkMode: 'toggle dark mode',
    },
};
