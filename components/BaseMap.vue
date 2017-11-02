<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">MAPS</p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="map-container">
          <gmap-map :center="center" :zoom="zoom" :style="mapStyle">
            <gmap-marker
              v-for="(m, index) in $store.state.company.vehicles"
              v-if="m.showOnMap"
              :key="index"
              :position="m.position"
              @click="trackVehicle(m)"
            >
            </gmap-marker>
          </gmap-map>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: {
      center: {
        type: Object,
        default () {
          return {
            lat: 13.8602,
            lng: 100.5129
          }
        }
      },
      zoom: {
        type: Number,
        default: 13
      },
      height: {
        type: Number,
        default: 300
      }
    },
    computed: {
      mapStyle () {
        return `width: 100%; height: ${this.height}px;`
      }
    },
    methods: {
      trackVehicle (vehicle) {
        this.$toast.open(`Tracking ${vehicle.name}`)
      }
    }
  }
</script>

<style>
  /*.map-container {*/
  /*width: 500px;*/
  /*height: 300px;*/
  /*}*/
</style>
