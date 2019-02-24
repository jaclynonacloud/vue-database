import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // characters
    {
      path: '/characters',
      name: 'characters',
      component: () => import('./views/Characters.vue')
    },
    {
      path: '/character/:name',
      name: 'character',
      component: () => import('./views/Character.vue')
    },
    // locations
    {
      path: '/locations',
      name: 'locations',
      component: () => import('./views/Locations.vue')
    },
    {
      path: '/location/:name',
      name: 'location',
      component: () => import('./views/Location.vue')
    },
    // lore
    {
      path: '/lore',
      name: 'lore',
      component: () => import('./views/Lore.vue')
    },
    // encyclopedia
    {
      path: '/encyclopedia',
      name: 'encyclopedia',
      component: () => import('./views/Encyclopedia.vue')
    },
    // news
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News.vue')
    },
    /*---------- ADMIN ----------*/
    // main
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/admin/Admin.vue')
    },
    // character - edit
    {
      path: '/admin/character/:name',
      name: 'admin-character-edit',
      component: () => import('./views/admin/_Character.vue')
    },
    // character
    {
      path: '/admin/character',
      name: 'admin-character',
      component: () => import('./views/admin/_Character.vue')
    },
    

  ]
})
