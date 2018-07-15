const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonPaths = require('./common-paths')
const path = require('path')

const config = {
  entry: {
    main: ['./src/index.js']
  },
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    // 'root': [path.resolve('./src')],
    'extensions': ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanPlugin(['../public'], { allowExternal: true }),
    new HtmlPlugin({
      filename: 'index.html',
      template: commonPaths.template,
      inject: true
    })
  ]
}

module.exports = config