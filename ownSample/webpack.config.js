const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/pages/anotherPage.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                // must match `generateScopedName` in `.babelrc`
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            }
          ]
        })
      },
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    }),
    new webpack.optimize.CommonsChunkPlugin({
           name: 'common' // Specify the common bundle's name.
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
};