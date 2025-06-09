// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@vite-pwa/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-27',
  pwa: {
    manifest: {
      name: 'Rezo Tracker',
      short_name: 'Rezo',
      lang: 'en',
      display: 'standalone',
      start_url: '/',
      background_color: '#ffffff',
      theme_color: '#00c16a',
    },
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'default',
    },
    icon: {
      source: 'public/icon.png',
    },
  }
})