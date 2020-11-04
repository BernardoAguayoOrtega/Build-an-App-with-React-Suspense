const HtmlWebpackPlugin = require('html-webpack-plugin')

const babelRules = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  exclude: /node_modules/
}

const cssRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
  exclude: /node_modules/
}

module.exports = {
  entry: './src/index.jsx',
  module:{
    rules:[babelRules, cssRules]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}