const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const paths = require('./paths')
const commonConfig = require('./webpack.base')

const jstsRegex = /\.(js|jsx|ts|tsx)$/

const PORT = 8080

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    historyApiFallback: true,
    static: paths.build,
    compress: true,
    open: true,
    hot: true,
    port: PORT,
    proxy: {
      // '/cdp-api': {
      //   target: 'https://test-cdp.myscrm.cn/cdp-api',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/cdp-api': ''
      //   }
      // }
    }
  },

  module: {
    rules: [
      {
        test: jstsRegex,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [require.resolve('react-refresh/babel')].filter(Boolean)
            }
          }
        ]
      }
    ]
  },
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean)
})
