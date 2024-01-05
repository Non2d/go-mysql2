const path = require('path');
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require('webpack');

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
  },
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL)
    }),
  ],
});