module.exports = {
    globDirectory: './',
    globPatterns: [
      '**/*.{html,json,js,css,woff}'
    ],
    swDest: './sw.js',
    runtimeCaching: [{
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 24 * 60 * 60  //1 day 
        },
      },
    }]
  };