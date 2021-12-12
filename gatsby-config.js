module.exports = {
    siteMetadata: {
        title: `Today phrygia Learned`,
        name: `Code Bushi`,
        siteUrl: `https://phrygia.github.io/phrygia-TIL/`,
        description: `This is my description that will be used in the meta tags and important for search results`,
        social: [
            {
                name: `github`,
                url: `https://github.com/phrygia`,
            },
            // {
            //   name: `twitter`,
            //   url: `https://twitter.com/HuntaroSan`
            // }
        ],
        sidebarConfig: {
            forcedNavOrder: ['/introduction', '/codeblock'],
            ignoreIndex: true,
        },
    },
    plugins: [{ resolve: `gatsby-theme-document` }],
};
