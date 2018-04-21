const HtmlWebpackPlugin = require('html-webpack-plugin');

const PrettierWebpackWatchPlugin = require('./plugins/prettier-webpack-watch-plugin');

module.exports = {
  mode: 'development',
  context: __dirname + '/src',
  entry: __dirname + '/src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new PrettierWebpackWatchPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/html/index.html',
    }),
  ],
  devServer: {
    contentBase: 'dist',
    port: 8080,
  },
  devtool: 'source-map',
};
