const paths = require('./paths')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const theme = require('./theme')

const env = process.env.NODE_ENV
const jstsRegex = /\.(js|jsx|ts|tsx)$/
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/

const isDev = env === 'development'

const cssModuleOptions = (type, useModules) => {
  const options = { importLoaders: type || 1 }
  if (useModules) {
    options.modules = {
      localIdentName: '[path][name]_[hash:base64:5]',
      // localIdentContext: paths.src,
      exportLocalsConvention: 'camelCase'
    }
  }
  return options
}

const lessOptions = () => {
  const lessOptions = {
    modifyVars: theme,
    javascriptEnabled: true
  }
  return {
    lessOptions
  }
}

module.exports = {
  target: 'web',
  entry: {
    app: paths.src + '/main.tsx'
  },
  output: {
    path: paths.build,
    publicPath: isDev ? '/' : './',
    filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
    chunkFilename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': paths.src
    }
  },
  module: {
    rules: [
      {
        test: jstsRegex,
        include: paths.src,
        exclude: ['/node_modules/'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: cssRegex,
        exclude: [cssModuleRegex, '/node_modules/'],
        include: paths.src,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssModuleOptions(1, false)
          },
          'postcss-loader'
        ],
        sideEffects: true
      },
      {
        test: cssModuleRegex,
        exclude: '/node_modules/',
        include: paths.src,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssModuleOptions(1, true)
          },
          'postcss-loader'
        ]
      },
      {
        test: lessRegex,
        exclude: [lessModuleRegex, '/node_modules/'],
        include: paths.src,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssModuleOptions(1, false)
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: lessOptions()
          }
        ],
        sideEffects: true
      },
      {
        test: lessModuleRegex,
        exclude: '/node_modules/',
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: cssModuleOptions(1, true) },
          'postcss-loader',
          { loader: 'less-loader' }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: paths.public + '/index.html', // template file
      favicon: paths.public + '/favicon.ico',
      filename: 'index.html', // output file
      inject: 'body' // script??????body??????
    })
  ]
}
