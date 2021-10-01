module.exports = {
  presets: ["@babel/preset-env", ["@babel/preset-react", { "runtime": "automatic", "importSource": "@emotion/react" }]],
  plugins: [
    "@emotion/babel-plugin",
    "babel-plugin-macros",
    [
      "module-resolver",
      {
        "root": ["."],
        "alias": {
          "@": "./src"
        }
      }
    ]
  ]
}
