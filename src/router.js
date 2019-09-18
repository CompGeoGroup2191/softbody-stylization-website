import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import(/* webpackChunkName: "about" */ './views/Team.vue')
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import(/* webpackChunkName: "about" */ './views/Updates.vue')
    }
  ]
})
