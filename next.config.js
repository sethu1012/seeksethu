const withPWA = require('next-pwa');
const { nanoid } = require('nanoid');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
    ignoreURLParametersMatching: [/^lang/, /^h/, /^w/, /^forward/],
    additionalManifestEntries: [{ url: '/', revision: nanoid() }],
    runtimeCaching: [
      {
        urlPattern: "/",
        handler: "NetworkFirst",
        options: {
          cacheName: "start-url",
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
          }
        }
      },
      {
        urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp|woff2)/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'v2-static-assets',
          expiration: {
            maxEntries: 1000,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
          },
          cacheableResponse: {
            statuses: [0, 200, 304],
          },
        },
      },
    ],
  },
});
