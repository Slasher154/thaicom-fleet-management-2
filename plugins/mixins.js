import Vue from 'vue'
import https from 'https'
import axios from 'axios'

Vue.mixin({
  methods: {
    $_callUbiGet (url, params) {
      const agent = new https.Agent({
        rejectUnauthorized: false
      })
      return axios.get(url, { httpsAgent: agent, params })
    }
  }
})
