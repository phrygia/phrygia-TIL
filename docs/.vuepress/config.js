module.exports = {
  title: "Today phrygia Learned",
  description: "",
  head: [
    [
      "meta",
        { 
          name: 'google-site-verification', 
          content: 'Qwl1ByUT9JKdKH-gShcyEFtOESV8O62F4LH-zNIjiQw' 
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
    ["script", {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-NMYSHMN3DT');"]],
  ],
  plugins: [["sitemap", { hostname: "https://phrygia.github.io/phrygia-TIL/" }]],
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
        title: "Web",
        collapsable: true,
        sidebarDepth: 1,
        children: ["/web/browsers-repository", "/web/url-web"],
      },
      {
        title: "Git",
        collapsable: true,
        sidebarDepth: 1,
        children: ["/git/git-basic"],
      },
      // {
      //     title: 'Other',
      //     collapsable: false,
      //     sidebarDepth: 1,
      //     children: ['/other/about'],
      // },
    ],
    toggleSidebar: "toggle sidebar",
    toggleDarkMode: "toggle dark mode",
  },
};
