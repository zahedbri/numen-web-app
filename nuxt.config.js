import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',

  head: {
    title: 'Numen Installer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  loading: { color: '#BDBDBD', height: '3px' },

  css: ['~/assets/style/app.styl'],

  plugins: ['@/plugins/vuetify', '@/plugins/api'],

  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],

  axios: {},

  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    }
  }
}