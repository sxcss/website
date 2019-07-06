import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Fantastic CSS – Universal and scalable SCSS framework',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '🎮 Universal, scalable and 100% customizable SCSS framework built for rapid & organized UI development 🛠' },
      { name: 'google-site-verification', content: '4ZpQ0oM9kNdTAPLI6LZgyKOdLjc1Y_35Jp9Yrj3BNQQ' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/img/brand/fantastic-css-mark.png' },
      { rel: 'https://use.typekit.net/whb1loi.css', type: 'text/css', href: 'https://use.typekit.net/whb1loi.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#703dea' },

  /*
  ** Global CSS
  */
  css: [
    '~/styles/theme/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-particles', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@vue-wordpress/nuxt', {
        url: 'https://wp.sxcss.io/',
        lang: 'en',
        menus: false,
        router: true,
        store: true
      }
    ],
    [
      '@nuxtjs/google-analytics', {
        id: 'UA-140885563-2'
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: [
      '@vue-wordpress/core',
      'vue-particles'
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
