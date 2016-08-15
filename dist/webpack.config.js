var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', 'css', 'scss'],
    modulesDirectories: [
      path.join(__dirname),
      path.join(__dirname, 'node_modules'),
    ]
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css')
  ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./bower_components"),
      path.resolve(__dirname, "./_patterns/00-atoms"),
      path.resolve(__dirname, "./_patterns/01-molecules"),
      path.resolve(__dirname, "./_patterns/02-organisms"),
    ]
  }
}
