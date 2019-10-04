const nodeExternals = require('webpack-node-externals');
const path = require('path');

const srcPath = path.resolve(__dirname, '../..', 'src');
const distPath = path.resolve(__dirname, '../..', 'build');

module.exports = {
  context: srcPath,
  entry: './server/server.js',
  output: {
    path: distPath,
    filename: 'server.bundle.js',
  },
  target: 'node',
  mode: 'production',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
    }, {
      test: /\.(css|sass|scss)$/,
      loader: 'ignore-loader',
    },
    ],
  },
  externals: nodeExternals(),
};
