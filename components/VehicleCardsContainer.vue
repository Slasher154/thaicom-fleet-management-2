<template>
  <div class="columns">
    <div
      v-for="(vehicle, index) in $store.state.company.vehicles"
      :key="index"
      class="column"
    >
      <vehicle-card
        :vehicle="vehicle"
      />

    </div>
  </div>
</template>

<script>
  import VehicleCard from './VehicleCard.vue'
  export default {
    components: {
      VehicleCard
    }
  }
</script>
