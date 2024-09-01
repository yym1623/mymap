import { createWebHistory, createRouter } from 'vue-router'

// dashboard
import DashBoard from '@/components/DashBoard.vue'
// apps
import Map from '@/components/Apps/Map.vue'
import Calendar from '@/components/Apps/Calendar.vue'
import Msg from '@/components/Apps/Msg.vue'

// user
import Star from '@/components/My/Star.vue'
import Cart from '@/components/My/Cart.vue'
import Info from '@/components/My/Info.vue'


const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', component: DashBoard, name: 'DashBoard' },
    { path: '/Apps/Map', component: Map, name: 'Apps / Map' },
    { path: '/Apps/Calendar', component: Calendar, name: 'Apps / Calendar' },
    { path: '/Apps/Msg', component: Msg, name: 'Apps / Msg' },

    { path: '/My/Star', component: Star, name: 'My / Star' },
    { path: '/My/Cart', component: Cart, name: 'My / Cart' },
    { path: '/My/Info', component: Info, name: 'My / Info' },
    // { path: '/about/:id', component: AboutView },
  ],

  scrollBehavior(to, from, savedPosition) {
    return { top : 0, behavior: 'smooth' }
  },
})

export default router