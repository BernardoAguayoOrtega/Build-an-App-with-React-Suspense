const babelRules = {
  test: /\.js$/,
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
  }
}