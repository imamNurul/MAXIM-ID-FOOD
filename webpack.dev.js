const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        static: './',
        hot: true
    },
    externals: {
        config: JSON.stringify({
            apiMx: 'http://localhost:28080',
        })
    },
    // plugins: [
    //     new BundleAnalyzerPlugin({
    //         analyzerPort: 3031
    //     })
    // ]
});