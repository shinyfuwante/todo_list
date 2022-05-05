const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
      rules: [ 
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
      ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To-do List',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};