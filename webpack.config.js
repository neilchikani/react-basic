let path = require("path");
let config = {
  context: __dirname + "/",
  entry: './entry/entry.js',
  output: {
    path: __dirname + "/build",
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  devServer: {
    inline: true,
    port: 4000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        exclude: '/node_modules',
        loader: "style!css!less"
      }
    ]
  }
};

module.exports = config;