module.exports = {
  /*
  ** Headers of the page
  */
  dev: (process.env.NODE_ENV !== 'production'), // true when 'npm run dev', false when 'npm run build' then 'npm start'
  env: {
    devUrl: 'https://esdiot.ddns.net:8443'
  },
  head: {
    title: 'Fleet Manager',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' } // Font Awesome
    ]
  },
  plugins: [
    '~plugins/axios',
    '~plugins/buefy',
    '~plugins/filters',
    '~plugins/googlemaps',
    '~plugins/mixins',
    '~plugins/vee-validate'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
