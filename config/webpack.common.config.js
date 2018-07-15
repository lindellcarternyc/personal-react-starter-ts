const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const commonPaths = require('./common-paths')
const path = require('path')

const config = {
  entry: {
    main: ['./src/index.tsx']
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
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  resolve: {
    'extensions': ['.js', '.jsx', '.ts', '.tsx', '.scss']
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