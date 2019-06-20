const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const buildDirPath = Path.join(__dirname, '/build');

const webpackConfig = {
  devtool: 'eval-cheap-module-source-map',

  entry: {
    index: './src/index.js',
  },

  output: {
    filename: '[name].js',
    path: buildDirPath,
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
    // new HTMLInlineCSSWebpackPlugin(),
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
