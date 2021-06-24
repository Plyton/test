import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Time from '../views/Time.vue'
import Weather from '../views/Weather.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Time',
    name: 'Time',
    component: Time
  },
  {
    path: '/Weather',
    name: 'Weather',
    component: Weather
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
