import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/videoexample',
      name: 'videoexample',
      component: () => import('./views/videoexample/index.vue')
    },
    {
      path: '/lazyload',
      name: 'lazyload',
      component: () => import('./views/lazyload/index.vue')
    },
    {
      path: '/PChild',
      name: 'PChild',
      component: () => import('./views/PChild/parent.vue')
    },
    {
      path: '/regular',
      name: 'regular',
      component: () => import('./views/regular/index.vue')
    }
  ]
})
