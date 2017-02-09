let webpack = require('webpack');
module.exports = {
    entry: "./src/angular-uuid.js",
    output: {
        path: './dist',
        filename: "angular-uuid.min.js"
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};