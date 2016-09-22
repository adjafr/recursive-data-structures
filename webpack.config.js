'use strict'

const target = 'node'

const entry = {
  main: './src/main.js'
}

const output = {
  path: './dist',
  filename: '[name].js'
}

const modulesDirectories = [
  'node_modules',
  'lib'
]

const loaders = [{
  test: /.js$/,
  exclude: /node_modules/,
  loader: 'babel'
}]

module.exports = {
  target,
  entry,
  output,
  resolve: {
    modulesDirectories
  },
  module: {
    loaders
  }
}
