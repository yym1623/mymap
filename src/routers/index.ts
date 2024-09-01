import { createWebHistory, createRouter } from 'vue-router'

import DashBoard from '@/components/DashBoard.vue'
import Map from '@/components/Apps/Map.vue'
import Calendar from '@/components/Apps/Calendar.vue'
import Cart from '@/components/Apps/Cart.vue'


const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', component: DashBoard, name: 'DashBoard' },
    { path: '/Apps/Map', component: Map, name: 'Apps / Map' },
    { path: '/Apps/Calendar', component: Calendar, name: 'Apps / Calendar' },
    { path: '/Apps/Cart', component: Cart, name: 'Apps / Cart' },
    // { path: '/about/:id', component: AboutView },
  ],

  scrollBehavior(to, from, savedPosition) {
    return { top : 0, behavior: 'smooth' }
  },
})

export default router