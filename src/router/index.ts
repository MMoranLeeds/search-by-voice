import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue')
  },
  {
    path: '/amo-loading',
    name: 'AMOLoading',
    component: () => import(/* webpackChunkName: "amoloading" */ '../views/AMOLoading.vue')
  },
  {
    path: '/shipping',
    name: 'ShippingOptions',
    component: () => import(/* webpackChunkName: "shippingoptions" */ '../views/ShippingOptions.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
