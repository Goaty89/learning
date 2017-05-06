const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const APP_DIR = path.resolve(__dirname, 'src/index');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
      'react-hot-loader/patch', //activate HMR for React
        'webpack-dev-server/client?http://localhost:8080',
        //bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        './index'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
        //necessary for HMR to know where to load the hot update chunks
    },
    devServer: {
      hot: true,
        //enable HMR on the server
        contentBase: path.resolve(__dirname, 'dist'),
        // match the output path
        publicPath: '/'
        // match the output `publicPath`
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use : 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader?modules', ],
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //enable HRM globally
        new webpack.NamedModulesPlugin(),
        // print more readable module names in the browser console on HMR updates
    ]
};