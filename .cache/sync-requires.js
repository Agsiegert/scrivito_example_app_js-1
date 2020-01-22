const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/antony/infopark/agsiegert_repo/ScrivitoJS/scrivito_example_app_js-1/src/pages/index.js")))
}

