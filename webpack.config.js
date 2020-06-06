const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { NODE_ENV = 'development' } = process.env;

module.exports = {
  mode: NODE_ENV,
  optimization: {
    usedExports: NODE_ENV === 'development',
    minimize: NODE_ENV !== 'development',
    minimizer: NODE_ENV !== 'development' ? [new TerserPlugin({
      extractComments: 'all'
    })] : undefined,
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },
  entry: {
    app: ['./app/app.js'],
    vendor: ['react', 'react-dom', 'react-router-dom', 'emotion'],
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'index.html'),
      filename: getHtmlFilePath(),
      minify: true,
      hash: true,
      base: '/'
    })
  ],
  mode: 'development'
};

function getHtmlFilePath() {
  return NODE_ENV === 'development' ? 'index.html' : path.join(__dirname, 'index.html');
}
