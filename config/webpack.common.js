var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        'vendor': './src/client/vendor.ts',
        'app': './src/client/main.ts' // our angular app
    }
    , module: {
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
        },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
    }
    , plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                tslint: {
                    emitErrors: false,
                    failOnHint: false
                },
                postcss: [
                    autoprefixer({
                        browsers: ['last 2 version']
                    })
                ]
            }
        }),
        // Workaround needed for angular 2 angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('src/client')// location of your src
        ),
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            chunksSortMode: 'dependency'
        }),
        new CopyWebpackPlugin([{
            from: './src/client/images',
            to: 'images'
        }]),
        new CleanWebpackPlugin(['dist'], {
            root: helpers.root('')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'app'],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};