var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'vendor': './src/client/vendor.ts',
    'app': './src/client/main.ts' // our angular app
  },
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/BookLibraryAngular',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080/BookLibraryAngular' })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    quiet: true,
    inline: true,
    stats: 'minimal',
    hot: true
  }
});
