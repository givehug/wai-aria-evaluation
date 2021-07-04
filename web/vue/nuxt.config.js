export default {
  head: {
    title: 'vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  router: {
    base: '/vue'
  },

  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/vuetify', { treeShake: true }]
  ],

  modules: [],
  css: [],
  plugins: [],
  components: true,
  build: {}
};
