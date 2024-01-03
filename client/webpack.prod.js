const path = require('path'); //npm run buildで必要
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

console.log(
  "///////////////////////////\n" +
    "webpack.prod.js is loaded.\n" +
    "///////////////////////////\n"
);
process.env.NODE_ENV = "production";
module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  }, // 本番環境に応じたPathの指定？
  mode: "production",
});