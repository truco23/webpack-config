const common    = require('./webpack.common');
const merge     = require('webpack-merge');
const path      = require('path');
const htmlPlugin= require('html-webpack-plugin');

let plugins = [];

let base_url = JSON.stringify('http://localhost:3001');

let output = {
    path: path.resolve(__dirname, 'build/dev'),
    filename: '[name].[chunkhash].bundle.js',
    // publicPath: 'public'
};

let devServer = {
    contentBase: path.resolve(__dirname, 'build/dev'),
};

plugins.push(new webpack.DefinePlugin({ base_url }));

plugins.push(new htmlPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'src/index.html'),
    hash: true,
    html5: true,
}));

module.exports = merge(common, {
   mode: 'development',
   devtool: 'source-map',
   output,
   devServer,
   plugins,
});