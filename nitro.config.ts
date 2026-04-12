import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  preset: 'cloudflare_module',
  compatibilityDate: '2026-04-12',
  routeRules: {
    '/dis': { redirect: 'https://discord.gg/7zxjKnRdpW' },
    '/dis/': { redirect: 'https://discord.gg/7zxjKnRdpW' },
    '/dis/index.php': { redirect: 'https://discord.gg/qCgwcdGFYk' },
    '/links/': { redirect: '/links' },
    '/links/index.php': { redirect: '/links' },
    '/links/v1.json': {
      headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'GET, OPTIONS',
        'access-control-allow-headers': 'X-Requested-With'
      }
    }
  },
  cloudflare: {
    nodeCompat: true
  }
})