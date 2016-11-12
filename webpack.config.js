var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  devtool: 'source-map',
  entry:[
    './app/index'
  ],
  output:{
    path: __dirname + '/dist',
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
    contentBase: './dist',
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