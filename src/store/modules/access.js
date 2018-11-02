import { constantRouterMap, asyncRouterMap } from '@/router'
import * as types from '@/store/mutation-types'
const syncRoutes = {
  state: {
    routes: constantRouterMap,
    syncRoute: asyncRouterMap,
    page404: [],
    newSyncRoute: []
  },
  mutations: {
    [types.FILTER_ROUTES] (state, data) {
      return new Promise(resolve => {
        let session = sessionStorage.getItem('customToken')
        data.forEach(val => {
          state.syncRoute.forEach(value => {
            if (val.name === value.name) {
              value.meta.roles = [...val.meta.roles]
            }
            if (val.name === value.name && val.children && val.children.length > 0) {
              // value.children = [...val.children]
              value.children.concat(val.children)
            }
            if (value.name === '404') {
              state.page404 = value
            }
          })
        })
        state.newSyncRoute = state.routes.concat(state.syncRoute.filter(v => {
          return v.meta.roles && v.meta.roles.indexOf(session) > -1
        })).concat(state.page404)
        sessionStorage.setItem('localRoutes', JSON.stringify(state.newSyncRoute))
        resolve()
      })
    }
  },
  actions: {
    generateSyncRoute ({ commit }, data) {
      commit(types.FILTER_ROUTES, data)
    }
  }
}

export default syncRoutes
