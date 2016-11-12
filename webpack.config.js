var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
  entry:[
    './app/index'
  ],
  output:{
    path: process.env.NODE_ENV === 'production' ? __dirname + '/dist' : __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'react-hot/webpack', 'babel' ]
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    colors: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HTMLWebpackPluginConfig
  ]
};