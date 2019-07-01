const path = require('path');
const nodeExternals = require('webpack-node-externals');

const common = {
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ],
    },
    devServer: {
        hot: true,
        historyApiFallback: true
    }
}

module.exports = [
    {
        entry: path.join(__dirname, 'server', 'index.js'),
        output: {
            path: path.join(__dirname, "dist"),
            filename: 'bundle.js',
            publicPath: '/'
        },
        externals: nodeExternals(),
        ...common
    }
]