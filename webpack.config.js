const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin([
      { from: "manifest.json", to: "manifest.json" },
      { from: "src/bg.js", to: "bg.js" },
      { from: "icons/", to: "icons/" },
      { from: "src/options_custom/", to: "options_custom/" }
    ])
  ],
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
