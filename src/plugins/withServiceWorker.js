const { join } = require('path')
const withPWA = require('next-pwa')

module.exports = function withServiceWorker(config) {
  const generateInDevMode = process.env.SERVICE_WORKER === 'true'

  if (generateInDevMode) {
    console.log('> Using service worker in development mode')
  }

  return withPWA({
    ...config,
    pwa: {
      dest: 'public',
      swSrc: join('sw', 'service-worker.js'),
      disable: !generateInDevMode,
      manifestTransforms: [
        manifestEntries => {
          console.log('> Creating service worker...')
          const manifest = manifestEntries
            .filter(entry => !entry.url.includes('next/dist')) // these paths fail in development resulting in the service worker not being installed
            .map(entry => {
              entry.url = encodeURI(entry.url)
              return entry
            })
          return { manifest, warnings: [] }
        },
      ],
    },
  })
}
