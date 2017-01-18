"use strict";
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const failPlugin = require('webpack-fail-plugin');


// Always enabled plugins
const plugins = [
  // Extract CSS files to the 'bundle.css'.
  new ExtractTextPlugin('bundle.css'),
  // This plugin should be always required. See https://github.com/webpack/webpack/issues/708
  failPlugin,
];

// Production only plugins
if (process.argv.indexOf('--optimize-occurrence-order') != -1 ) {
  plugins.splice(0, 0, ...[
    // Pass the 'NODE_ENV=production' environment variable to the child processes.
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    // Minimize the output
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ]);
}


// Configs
module.exports = {
  entry: './main.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['env'] }
      },
      { test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.txt$/, loader: 'raw' },
      { test: /\.(?:png|(?:woff2?|ttf|eot|svg)(?:\?v=[0-9]\.[0-9]\.[0-9])?)$/, loader: 'file?name=static/[hash].[ext]' },
    ]
  },
  plugins,
  devtool: 'source-map',
  postcss: _ => [autoprefixer]
};
