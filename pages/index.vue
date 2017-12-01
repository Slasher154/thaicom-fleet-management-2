<template>

    <div>

      <login v-if="!$store.state.user" />

      <template v-else>
        <h1 class="title">{{ $store.state.company.name }} - Fleet Manager</h1>
        <hr>
        <br>
        <vehicle-cards-container />

        <div
          class="columns">
          <div class="column">
            <map-container />
          </div>
        </div>
      </template>

    </div>
</template>

<script>
  /* eslint-disable spaced-comment,indent */
  import Login from '@/components/Login'
  import VehicleCardsContainer from '@/components/VehicleCardsContainer'
  import MapContainer from '@/components/MapContainer'
  export default {
      components: {
          Login,
          VehicleCardsContainer,
          MapContainer
      },
      created () {
          this.$store.commit('createCars')
      }
  }
</script>

