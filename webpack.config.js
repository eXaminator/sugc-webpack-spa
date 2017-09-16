const { resolve } = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    module: {
    	rules: [
    		{ test: /\.html$/, use: 'html-loader' },
    		{ test: /\.(jpeg|png)$/, use: 'file-loader' },
    	],
    },
};
