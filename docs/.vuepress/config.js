const path = require('path')
let {getArticles} = require(path.resolve('docs/.vuepress/dong_util'))

module.exports = {
  title: "Today phrygia Learned",
  description: "",
  head: [
    [
      "meta",
      {
        name: "google-site-verification",
        content: "Qwl1ByUT9JKdKH-gShcyEFtOESV8O62F4LH-zNIjiQw",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: `../styles/index.styl`,
      },
    ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-NMYSHMN3DT",
      },
    ],
    [
      "script",
      {},
      [
        "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-NMYSHMN3DT');",
      ],
    ],
  ],
  plugins: [
    ["sitemap", { hostname: "https://phrygia.github.io/phrygia-TIL/" }],
  ],
  base: "/phrygia-TIL/",
  themeConfig: {
    lastUpdated: "Last Updated",
    docsDir: "docs",
    nav: [
      { text: "Github", link: "https://github.com/phrygia" },
      { text: "Blog", link: "https://phrygia.github.io/" },
    ],
    sidebar: [
      ["/", "HOME"],
      {
        title: 'Git',
        collapsable: true,
        sidebarDepth: 1,
        children: getArticles('git')
      },
      {
        title: 'JavaScript',
        collapsable: true,
        sidebarDepth: 1,
        children: getArticles('js')
      },
      {
        title: 'React',
        collapsable: true,
        sidebarDepth: 1,
        children: getArticles('react')
      },
      {
        title: 'Redux',
        collapsable: true,
        sidebarDepth: 1,
        children: getArticles('redux')
      },
      {
        title: 'Web',
        collapsable: true,
        sidebarDepth: 1,
        children: getArticles('web')
      }
    ],
    toggleSidebar: "toggle sidebar",
    toggleDarkMode: "toggle dark mode",
  },
};
