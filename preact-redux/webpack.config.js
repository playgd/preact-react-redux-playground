'use strict'
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve('.', 'src', 'main.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: (() => {
    if(!process.env.UGLIFY) {
      return []
    }

    return [
      new webpack.optimize.UglifyJsPlugin({
        compressor: { warnings: false },
        output: { comments: false }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin()
    ]
  })(),
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
}
