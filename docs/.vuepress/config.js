module.exports = {
  title: "Today phrygia Learned",
  description: "",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: `../styles/index.styl`,
      },
    ],
  ],
  plugins: [],
  base: "/phrygia-TIL/",
  themeConfig: {
    lastUpdated: "Last Updated",
    docsDir: "docs",
    nav: [{ text: "Github", link: "https://github.com/phrygia" }],
    sidebar: [
      ["/", "HOME"],
      // ["/git", "Git"],
      {
        title: "Git", // required
        // path: "/git/gits/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/git/git-basic"],
      },
    ],
    toggleSidebar: "toggle sidebar",
    toggleDarkMode: "toggle dark mode",
  },
};
