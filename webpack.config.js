const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [new NodePolyfillPlugin()],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
