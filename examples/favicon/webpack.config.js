var HtmlWebpackPlugin = require('../..');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './example.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.png$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HtmlWebpackPlugin example',
      favicon: 'favicon.ico',
      filename: 'favicon.html'
    }),
    new ExtractTextPlugin('styles.css')
  ]
};
