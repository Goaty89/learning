const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const APP_DIR = path.resolve(__dirname, 'src');
module.exports = {
    entry: './src',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel-loader',
                include: APP_DIR,
            },{
                test: /\.css/,
                use: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};