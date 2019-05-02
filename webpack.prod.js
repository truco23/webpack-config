const common    = require('./webpack.common');
const merge     = require('webpack-merge');
const babili    = require('babili-webpack-plugin');
const webpack   = require('webpack');
const path      = require('path');
const htmlPlugin= require('html-webpack-plugin');

let plugins = [];

let base_url = JSON.stringify('endereco-remoto-da-api');

let output = {
    path: path.resolve(__dirname, 'build/prod'),
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
};

let devServer = {
    contentBase: path.resolve(__dirname, 'build/prod'),
};

plugins.push(new webpack.DefinePlugin({ base_url }));

plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

plugins.push(new babili());

plugins.push(new htmlPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'src/index.html'),
    hash: true,
    minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
    },
}));

module.exports = merge(common, {
    mode: 'production',
    output,
    devServer,
    plugins,
 });