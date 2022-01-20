const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    externals: {
        config: JSON.stringify({
            apiMx: 'https://idmarket.taximaxim.com',
        })
    },
});