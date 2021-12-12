const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/leechaeyeon/Desktop/LIT/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-document-src-templates-docs-js": hot(preferDefault(require("/Users/leechaeyeon/Desktop/LIT/node_modules/gatsby-theme-document/src/templates/docs.js")))
}

