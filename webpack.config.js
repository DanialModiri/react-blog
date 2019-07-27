const path = require("path");
const ErroOverlay = require('error-overlay-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    devServer: {
        port: 3001,
        contentBase: './public',
        proxy: {
            '/':{
                target: 'http://localhost:3000',
                bypass: (req, res) => {
                    if (req.headers.accept.includes('html'))
                        return './index.html'
                }
            }

        }
    },
    plugins: [new ErroOverlay()],
    devtool: 'cheap-module-source-map'
}