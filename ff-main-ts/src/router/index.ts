import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { subMap } from  '../map-sub-app'
// TODO 此处无法通过引用 import { useStore } from 'vuex'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login/index.vue'),
    meta: {
      title: '登录',
      showLayout: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About/about.vue'),
    meta:{
      showLayout: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../components/404.vue'),
    meta: {
      title: '404',
      showLayout: false
    }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


// const childrenPath = ['webpack-app', 'map-app', 'form-app', 'table-app']
// 获取子模块路由前缀 判断是否为子路由

const subMapList = subMap.map(item=>{
  return item.activeRule
})

router.beforeEach((to, _from, next) => {
  console.log(to, _from)
  if(to.matched.length === 0 && !subMapList.includes(to.path)){
    //  404 逻辑
    router.push('/404')
    return
  }

  next()
})

// // 页面进入之后
// router.afterEach(() => {
// })

export default router
