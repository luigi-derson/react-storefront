const { join } = require('path')
// TODO: Configure and use next-pwa or next-offline

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
      sw: join(process.cwd(), 'sw', 'service-worker.js'),
      disable: process.env.NODE_ENV === 'development',
    },
  })
}
