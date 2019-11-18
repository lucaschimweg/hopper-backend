const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/app.tsx',
        login: './src/loginApp.tsx',
        subscribe: './src/subscribeApp.tsx',
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['../.build/frontend']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            filename: 'app.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            filename: 'index.html',
            chunks: ['login']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            filename: 'subscribe.html',
            chunks: ['subscribe']
        }),
    ],
    output: {
        path: __dirname + '/../.build/frontend',
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src')
        ]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.(png|jpe?g|gif|svg)$/i, loader: 'file-loader'},
            { test: /\.css/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.scss/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    optimization: {
        minimize: false
    },
};