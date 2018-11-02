import store from '@/store'
import router from '@/router'

/*
 * main中有引入
 * 根据触发按钮[admin, user] 添加不同权限路由
 * 根据vue router api【addRoutes】动态添加
 */
router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('customToken')) {
    store.dispatch('accessList')
      .then((res) => {
        return store.dispatch('generateSyncRoute', res)
      })
      .then(() => {
        router.addRoutes(store.getters.newSyncRoute)
        // router.addRoutes(JSON.parse(sessionStorage.getItem('localRoutes')))
      })
      .catch(err => {
        console.log(err)
      })
    next({ replace: true })
  }
  // if (to.name === 'Home') {
  // }
  next({ replace: true })
})

export default router
