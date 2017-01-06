"use strict";
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


// Always enabled plugins
const plugins = [
  // Extract CSS files to the 'bundle.css'.
  new ExtractTextPlugin('bundle.css'),
];

// Production only plugins
if (process.argv.indexOf('-p') != -1 ) {
  plugins.splice(0, 0, ...[
    // Pass the 'NODE_ENV=production' environment variable to the child processes.
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
  ]);
}


// Configs
module.exports = {
  entry: './main.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/../server/build`,
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
