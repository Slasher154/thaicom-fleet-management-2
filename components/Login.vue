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
        <button :class="[{ 'is-loading': isLoading }, 'button', 'is-success']" @click="login">
          Login
        </button>
      </p>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        isLoading: false
      }
    },
    methods: {
      async login () {
        this.isLoading = true
        try {
          let response = await this.$_callUbiGet('login', {user: this.username, pass: this.password})
          if (response.data.res === 'Ok') {
            this.$toast.open(`Successfully log in`)
            this.$store.commit('setApiKey', response.data.msg)
            this.$store.commit('setUser', {username: this.username})
          } else {
            this.$toast.open(`Invalid username or password`)
          }
        } catch (e) {
          this.$toast.open(`Invalid username or password`)
        }
        this.isLoading = false
      }
    }
  }
</script>
