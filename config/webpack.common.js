var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts' // our angular app
        //'polyfills': './src/polyfills.ts',
        // 'vendor': './scripts/vendor.js',
        // 'app': './scripts/main.js'
    }
    , module: {
        rules: [{
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader?', 'angular2-template-loader', '@angularclass/hmr-loader'],
            exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000',
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
    }
    , plugins: [
        //TODO: need to find a simpler way to inject scripts to all files 
        // new HtmlWebpackPlugin({
        //     filename: 'dashboard.html',
        //     template: 'dashboard.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'authoredit.html',
        //     template: 'authoredit.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'authors.html',
        //     template: 'authors.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'bookedit.html',
        //     template: 'bookedit.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'books.html',
        //     template: 'books.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'login.html',
        //     template: 'login.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'profile.html',
        //     template: 'profile.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'register.html',
        //     template: 'register.html'
        // }),
            // Workaround needed for angular 2 angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('src')// location of your src
    ),
          new HtmlWebpackPlugin({
        template: './src/index.html',
        chunksSortMode: 'dependency'
      }),
        new CopyWebpackPlugin([{
            from: './src/images',
            to: 'images'
        }]),
        new CleanWebpackPlugin(['dist'], {
            root: helpers.root('')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};