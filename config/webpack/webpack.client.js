const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcPath = path.resolve(__dirname, '../..', 'src');
const distPath = path.resolve(__dirname, '../..', 'build', 'public');

module.exports = {
  context: srcPath,
  target: 'web',
  devtool: 'source-map',
  entry: './app/index.js',
  mode: 'production',
  output: {
    path: distPath,
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.bundle.css' }),
  ],
};
