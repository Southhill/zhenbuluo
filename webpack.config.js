const webpack = require('webpack')
const path = require('path')

const config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'url-loader'
            },
            {
                test: /\.(ttf|svg|eot|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        
    }
}