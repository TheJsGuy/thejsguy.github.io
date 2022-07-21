const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { join } = require("path");
const RuntimeContentConfigPlugin = require("./webpack/plugins/runtime-content-config-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/App.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "@mdx-js/loader",
            options: {},
          },
        ],
      },
      {
        test: /\.jpg?$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3315,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./templates/index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({ filename: "app.[hash].css" }),
    // new RuntimeContentConfigPlugin({
    //   contentPath: join(__dirname, "src", "content"),
    // }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: "development",
};
