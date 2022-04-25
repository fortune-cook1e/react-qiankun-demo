const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const clearPath = path.resolve(__dirname, '../dist')

const REACT_MODULE =
  /[\\/]node_modules[\\/](react|react-dom|react-redux|react-router-config|react-router-dom|react-router-redux|redux|react-transition-group|framer-motion)[\\/]/

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin()
  ]
})
