/**
 * Created by thanatv on 11/2/17.
 */

import Vuex from 'vuex'
import _ from 'lodash'

const createStore = () => {
  return new Vuex.Store({
    state: {
      company: {
        name: 'Thaicom PLC.',
        vehicles: []
      },
      apiKey: '',
      user: null
    },
    mutations: {
      changeName (state) {
        state.company.name = 'Intouch'
      },
      createCars (state) {
        state.company.vehicles = _.range(3).map(v => {
          return {
            vid: v,
            name: `Car ${v}`,
            status: 'Driving',
            speed: 50,
            fuel: 75,
            showOnMap: true,
            position: {
              lat: 13.54 + Math.random() * 2,
              lng: 100.5 + Math.random() * 1.5
            },
            tracking: false
          }
        })
      },
      track (state, vid) {
        state.company.vehicles.forEach(v => {
          if (v.vid === vid) v.tracking = true
          else v.tracking = false
        })
      },
      toggleShowOnMap (state, vid) {
        let vehicle = state.company.vehicles.find(v => v.vid === vid)
        vehicle.showOnMap = !vehicle.showOnMap
      },
      setApiKey (state, key) {
        state.apiKey = key
      },
      setUser (state, user) {
        state.user = user
      }
    }
  })
}

export default createStore
