<template>

    <div>

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
    </div>
</template>

<script>
  /* eslint-disable spaced-comment,indent */
  import VehicleCardsContainer from '@/components/VehicleCardsContainer'
  import MapContainer from '@/components/MapContainer'
  export default {
      components: {
          VehicleCardsContainer,
          MapContainer
      },
      created () {
          this.$store.commit('createCars')
      }
  }
</script>

