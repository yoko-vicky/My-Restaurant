const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } }, // Translates CSS into CommonJS
          { loader: 'postcss-loader', options: { sourceMap: true } }, // Translates CSS into CommonJS
          { loader: 'sass-loader', options: { sourceMap: true } }, // Translates CSS into CommonJS
        ],
      },
    ],
  },
});
