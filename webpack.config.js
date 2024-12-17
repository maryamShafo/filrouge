const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv').config(); // Load .env file automatically

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'src/[name].[fullhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.ts$/, use: 'ts-loader' },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // Type de fichiers à gérer
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]', // Option de nommage du fichier en sortie
              outputPath: 'videos/' // Où les fichiers seront placés après compilation
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 9091,
    open: true,
    hot: true,
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
      webSocketTransport: 'ws'
    },
    webSocketServer: 'ws'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body',
      hash: true
    }),
    new ESLintPlugin({
      extensions: 'js',
      exclude: 'node_modules',
      files: './src/'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed) // Pass all .env variables
    })
  ]
};
