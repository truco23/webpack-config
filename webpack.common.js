const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack   = require('webpack');

let plugins = [];

let entry = ['babel-polyfill', path.resolve(__dirname, 'src/index.js')];

let optimization = {
    // runtimeChunk: true,
    moduleIds: 'hashed',
    splitChunks: {
        chunks: 'all',
        maxSize: 200000,
        cacheGroups: {
            // example:
            // bootstrap: { 
            //     test: /[\\/]node_modules[\\/]((bootstrap).*)[\\/]/, 
            //     name: "bootstrap-vendor",
            //     enforce: true,
            // },
        }
    }
};

let rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
            
    },
    {
        test: /\.css$/,
        // loader: 'style-loader!css-loader'
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: path.resolve(__dirname, 'public'),
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader'
          ],
    },
    { 
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
    },
    { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    },
    { 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file-loader' 
    },
    { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
    }
];

plugins.push(new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].bundle.css',
    // chunkFilename: 'bundle.css',
}));

module.exports = {
    entry,
    optimization,
    module: { rules },
    plugins
}