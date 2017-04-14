const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
module.exports = {
    entry: './src',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel-loader',
                include: APP_DIR,
            }
        ],
    }
};