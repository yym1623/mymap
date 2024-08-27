import { createWebHistory, createRouter } from 'vue-router'

import DashBoard from '@/components/DashBoard.vue'
import Map from '@/components/Map.vue'
import Calendar from '@/components/Calendar.vue'


const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', component: DashBoard },
    { path: '/Map', component: Map },
    { path: '/Calendar', component: Calendar },
    // { path: '/about/:id', component: AboutView },
  ],

  scrollBehavior(to, from, savedPosition) {
    return { top : 0, behavior: 'smooth' }
  },
})

export default router