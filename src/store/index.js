import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  attributes: {},
  gameObjects: {},
  epsilonServerAddress: ''
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: [
    createPersistedState({
      key: 'empty-epsilon-http-console'
    })
  ]
})
