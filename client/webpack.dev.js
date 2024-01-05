const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require('webpack'); // 追加

console.log(
  "///////////////////////////\n" +
    "webpack.dev.js is loaded.\n" +
    "///////////////////////////\n"
);
process.env.NODE_ENV = "development";
module.exports = merge(common, {
  output: {
    publicPath: '/', // これがないとreact-router-domが変な挙動をするかも
  },
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [ // 追加
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL)
    }),
  ],
});