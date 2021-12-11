// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Today phrygia Learned",
  tagline: "Dinosaurs are cool",
  url: "https://phrygia.github.io/",
  baseUrl: "/phrygia-TIL/",
  // onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "phrygia", // Usually your GitHub org/user name.
  projectName: "Today phrygia Learned", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: "Today phrygia Learned",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Today phrygia Learned",
          },
          {
            href: "https://github.com/phrygia/phrygia-TIL.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
