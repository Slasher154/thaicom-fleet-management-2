<template>
  <div class="container">

    <nav class="navbar is-transparent">

      <!--Start Navbar brand-->
      <div class="navbar-brand">

        <!--Logo-->
        <nuxt-link class="navbar-item" to="/">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"
               width="112" height="28">
        </nuxt-link>

        <div class="navbar-burger burger" data-target="navMenuTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!--End Navbar brand-->

      <!--Start Navbar menu-->
      <div id="navMenuTransparentExample" class="navbar-menu">

        <!--Start Navbar left menu-->
        <div class="navbar-start">
          <!--<div class="navbar-item has-dropdown is-hoverable">-->
          <!--<a class="navbar-link  is-active" href="/documentation/overview/start/">-->
          <!--Docs-->
          <!--</a>-->
          <!--<div class="navbar-dropdown is-boxed">-->
          <!--<a class="navbar-item " href="/documentation/overview/start/">-->
          <!--Overview-->
          <!--</a>-->
          <!--<a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">-->
          <!--Modifiers-->
          <!--</a>-->
          <!--<a class="navbar-item " href="http://bulma.io/documentation/columns/basics/">-->
          <!--Columns-->
          <!--</a>-->
          <!--<a class="navbar-item " href="http://bulma.io/documentation/layout/container/">-->
          <!--Layout-->
          <!--</a>-->
          <!--<a class="navbar-item " href="http://bulma.io/documentation/form/general/">-->
          <!--Form-->
          <!--</a>-->
          <!--<a class="navbar-item " href="http://bulma.io/documentation/elements/box/">-->
          <!--Elements-->
          <!--</a>-->

          <!--<a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">-->
          <!--Components-->
          <!--</a>-->

          <!--<hr class="navbar-divider">-->
          <!--<div class="navbar-item">-->
          <!--<div>-->
          <!--<p class="is-size-6-desktop">-->
          <!--<strong class="has-text-info">0.5.3</strong>-->
          <!--</p>-->

          <!--<small>-->
          <!--<a class="bd-view-all-versions" href="/versions">View all versions</a>-->
          <!--</small>-->

          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->

        </div>
        <!--End Navbar left menu-->

        <!--Start Navbar right menu-->
        <div class="navbar-end">

          <div class="navbar-item has-dropdown is-hoverable" v-if="$store.state.user">
            <a class="navbar-link">
              {{$store.state.user.username}}
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Profile
              </a>
              <a class="navbar-item">
                Menu 2
              </a>
              <a class="navbar-item">
                Menu 3
              </a>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Menu 4
              </div>
            </div>
          </div>

          <div class="navbar-item" v-if="$store.state.user">

            <p class="control">
              <a :class="[{ 'is-loading' : isLoggingOut }, 'button', 'is-primary']" @click="logout">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
                <span>Logout</span>
              </a>
            </p>
          </div>
        </div>
        <!--End Navbar right menu-->
      </div>
      <!-- End Navbar menu -->

    </nav>


  </div>

</template>

<script>
  export default {
    data () {
      return {
        isLoggingOut: false
      }
    },
    methods: {
      logout () {
        this.isLoggingOut = true
        this.$toast.open(`Successfully log out`)
        this.$store.commit('setApiKey', '')
        this.$store.commit('setUser', null)
        this.isLoggingOut = false
      }
    }
  }
</script>
