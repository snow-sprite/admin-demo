import Vue from 'vue'
import Router from 'vue-router'

// admin
// import Admin from '@/components/admin/Admin'
// user
// import User from '@/components/user/User'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/components/Index'),
    meta: {
      title: '我是首页'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/components/home'),
    meta: {
      title: '我是home页'
    },
    children: [
      {
        path: 'hello',
        name: 'Hello',
        component: () => import('@/components/HelloWorld'),
        meta: {
          title: '我是hello页'
        }
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/components/Test'),
        meta: {
          title: '我是测试页'
        }
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/components/admin/Admin'),
    meta: {
      title: '我是管理员页',
      roles: []
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/components/user/User'),
    meta: {
      title: '我是用户页',
      roles: []
    }
  },
  {
    path: '/both',
    name: 'Both',
    component: () => import('@/components/Both'),
    meta: {
      title: '我是both页',
      roles: []
    },
    children: [
      {
        path: ':id',
        name: 'Detail',
        component: () => import('@/components/Detail'),
        meta: {
          roles: []
        }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/components/404'),
    meta: {
      title: '404页'
    }
  }
]
/*
  json数据
 */
// {
//   "path": "user",
//   "name": "User",
//   "meta": {
//     "roles": ["user"]
//   }
// },
