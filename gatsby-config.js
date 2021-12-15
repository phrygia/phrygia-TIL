module.exports = {
  pathPrefix: `/phrygia-TIL`,
  siteMetadata: {
    title: `Today phrygia Learned`,
    name: `phrygia`,
    siteUrl: `https://phrygia.github.io/phrygia-TIL/`,
    description: ``,
    social: [
      {
        name: `github`,
        url: `https://github.com/phrygia`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/dmsgp62`,
      },
    ],
    sidebarConfig: {
      forcedNavOrder: ["/", "/monthly", "/git"],
      ignoreIndex: false,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-NMYSHMN3DT
        `, // 측정 ID
        head: false, // head에 tracking script를 넣고 싶다면 true로 변경
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 704,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          `gatsby-remark-embed-video`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Document`,
        short_name: `Document`,
        start_url: `/`,
        background_color: `#182952`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/site-icon.png",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
  ],
};
