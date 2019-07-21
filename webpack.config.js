const path = require('path');

module.exports = {
  entry: {
    app: [
      '@babel/polyfill',
      './src/index.js',
    ],
  },
  output: {
  path: path.resolve(__dirname),
    filename: 'index.js',
  },
  module: {
    rules: [{ 
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['@babel/preset-env', "@babel/preset-react"]
        }
    }]
  }
}
