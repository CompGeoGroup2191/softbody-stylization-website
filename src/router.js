import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Updates from './static/updates.js';

Vue.use(Router);

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
      component: () => import(/* webpackChunkName: "team" */ './views/Team.vue')
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import(/* webpackChunkName: "updates" */ './views/Updates.vue')
    },
    // Dynamically load updates
    ...Updates.updates.map(u => ({
      path: `/updates/${u.id}`,
      name: `update-${u.id}`,
      component: () => import(`./views/updates/U_${u.id}.vue`)
    })),
    // Fallback
    {
      path: '/updates/*',
      name: 'missing',
      component: () => import(/* webpackChunkName: "missing" */ './views/Missing.vue')
    },
  ]
})
