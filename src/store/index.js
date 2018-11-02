import Vue from 'vue'
import Vuex from 'vuex'
import access from '@/store/modules/access'
import * as types from '@/store/mutation-types'
Vue.use(Vuex)

const state = {
  newRoute: []
}

const getters = {
  newRoute: state => state.newRoute,
  newSyncRoute: state => state.access.newSyncRoute
}

const mutations = {
  [types.SET_SIDE] (state, data) {
    state.newRoute = data
  }
}

const actions = {
  accessList ({ commit }, data) {
    return new Promise(resolve => {
      fetch('../../static/syncRoute.json')
        .then(res => {
          return res.json()
        })
        .then(res => {
          commit(types.SET_SIDE, res)
          resolve(res)
        })
    })
  }
}

const store = new Vuex.Store({
  modules: {
    access
  },
  state,
  getters,
  actions,
  mutations
})

export default store
