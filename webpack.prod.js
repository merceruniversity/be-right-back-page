const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const webpackConfig = {
  entry: {
    index: './src/index.js',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inlineSource: '.(css|js|scss)$',
      filename: 'be-right-back.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      title: 'Be Right Back',
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },

  watchOptions: {
    ignored: ['node_modules', 'build'],
  },
};

module.exports = webpackConfig;
