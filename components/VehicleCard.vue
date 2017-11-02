<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{vehicle.name}} - <span>{{vehicle.status}}</span></p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns">
          <div class="column has-text-centered">
            <span class="icon">
              <i class="fa fa-home"></i>&nbspSpeed
            </span>
          </div>
          <div class="column has-text-centered">
            Fuel
          </div>
          <div class="column has-text-centered">
            XX
          </div>
        </div>
      </div>
      <!-- Footer -->
      <div class="field">
        <button
          :class="vehicle.showOnMap ? 'button is-info' : 'button is-warning'"
          @click="toggleShowOnMap">
          <b-icon icon="map-marker"></b-icon>
          <span>{{showOnMapButtonText}}</span>
        </button>
        &nbsp
        <button
          class="button is-primary"
          :disabled="vehicle.tracking"
          @click="track">
          <b-icon icon="location-arrow"></b-icon>
          <span>{{trackingButtonText}}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      vehicle: {
        type: Object
      }
    },
    computed: {
      trackingButtonText () {
        return this.vehicle.tracking ? 'Tracking' : 'Track'
      },
      showOnMapButtonText () {
        return this.vehicle.showOnMap ? 'Hide' : 'Show'
      }
    },
    methods: {
      track () {
        this.$store.commit('track', this.vehicle.vid)
        this.$toast.open(`Tracking ${this.vehicle.name}`)
      },
      toggleShowOnMap () {
        this.$toast.open(`${this.vehicle.name} is ${this.vehicle.showOnMap ? 'hidden from the map' : 'now shown on the map'}`)
        this.$store.commit('toggleShowOnMap', this.vehicle.vid)
      }
    }
  }
</script>
