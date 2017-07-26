var webpackMerge = require('webpack-merge');
var prodConfig = require('./webpack.prod.js');

module.exports = webpackMerge(prodConfig, {
  entry: {
    'vendor': './src/client/vendor.ts',
    'app': './src/client/main.aot.ts' // our angular app
  }
});
