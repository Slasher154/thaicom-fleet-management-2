<template>
  <div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          v-validate="{ required: true, regex: /^[^\W_]+$/ }"
          v-model="username" class="input" type="text" placeholder="Username">
        <span class="icon is-small is-left">
      <i class="fa fa-envelope"></i>
    </span>
        <span class="icon is-small is-right">
      <i class="fa fa-check"></i>
    </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input
          v-validate="{ required: true }"
          v-model="password" class="input" type="password" placeholder="Password">
        <span class="icon is-small is-left">
      <i class="fa fa-lock"></i>
    </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success" @click="login">
          Login
        </button>
      </p>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import https from 'https'
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login () {
        const agent = new https.Agent({
          rejectUnauthorized: false
        })
        try {
          let response = await axios.get(`https://esdiot.ddns.net:8443/login?user=${this.username}&pass=${this.password}`, {httpsAgent: agent})
          if (response.data.res === 'Ok') {
            this.$toast.open(`Successfully log in`)
            this.$store.commit('setApiKey', response.data.msg)
            this.$store.commit('setUser', { username: this.username })
          } else {
            this.$toast.open(`Invalid username or password`)
          }
        } catch (e) {
          this.$toast.open(`Invalid username or password`)
        }
      }
    }
  }
</script>
