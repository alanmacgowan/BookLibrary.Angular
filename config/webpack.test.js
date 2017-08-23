var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');
var helpers = require('./helpers');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.ts$/,
            enforce: 'pre',
            loader: 'tslint-loader'
        },
        {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader?', 'angular2-template-loader', '@angularclass/hmr-loader'],
            exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
        },
        {
            test: /\.css$/,
            exclude: helpers.root('src/client', 'app'),
            use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
        },
        {
            test: /\.css$/,
            include: helpers.root('src/client', 'app'),
            loaders: ['css-to-string-loader', 'css-loader']
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000',
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        },
        {
            test: /\.html$/,
            use: 'raw-loader',
            exclude: [helpers.root('src/client/index.html')]
        }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
    }
};