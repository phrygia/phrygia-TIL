module.exports = {
    siteMetadata: {
        title: `Today phrygia Learned`,
        name: `phrygia`,
        siteUrl: `https://phrygia.github.io/phrygia-TIL`,
        description: ``,
        social: [
            {
                name: `github`,
                url: `https://github.com/phrygia`,
            },
        ],
        sidebarConfig: {
            forcedNavOrder: ['/introduction', '/codeblock'],
            ignoreIndex: true,
        },
    },
    plugins: [{ resolve: `gatsby-theme-document` }],
};
