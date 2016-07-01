/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    'babel-polyfill',
    './index'
  ],
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets:['es2015'],
      }
    }]
  }
};
