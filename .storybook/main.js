const path = require("path")

const resolvePath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "webpackFinal": async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@emotion/styled": resolvePath("node_modules/@emotion/styled"),
      }
    }
  })
}
