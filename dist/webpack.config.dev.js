require( 'es6-promise' ).polyfill();
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var path = require( 'path' );

module.exports = {
  entry: './js/main.js',
  output: {
    path: __dirname,
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', 'css', 'scss' ],
    modulesDirectories: [
      path.join( __dirname ),
      path.join( __dirname + '/_patterns' ),
      path.join( __dirname + '/_patterns/atoms/importable' )
    ]
  },
  cache: true,
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract( 'style', 'css!sass' )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin( 'css/style.css' )
  ]
};
