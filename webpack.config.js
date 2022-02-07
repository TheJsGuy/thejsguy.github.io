const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { join } = require('path');
const RuntimeContentConfigPlugin = require('./webpack/plugins/runtime-content-config-plugin');

module.exports = {
    entry: {
        app: './src/App.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.[hash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.mdx?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: '@mdx-js/loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './templates/index.html', inject: 'body' }),
        new MiniCssExtractPlugin({ filename: 'app.[hash].css' }),
        new RuntimeContentConfigPlugin({ contentPath: join(__dirname, 'src', 'content') })
    ],
    mode: 'development'
};