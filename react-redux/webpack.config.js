'use strict'

const path = require('path')

module.exports = {
  entry: path.resolve('.', 'src', 'main.js'),
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  }
}
