import { createWebHistory, createRouter } from 'vue-router'

// dashboard
import DashBoard from '@/components/DashBoard.vue'
// apps
import Edit from '@/components/Apps/Edit.vue'
import Calendar from '@/components/Apps/Calendar.vue'
import Chat from '@/components/Apps/Chat.vue'

// user
import Star from '@/components/My/Star.vue'
import Info from '@/components/My/Info.vue'


const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', component: DashBoard, name: 'DashBoard' },
    { path: '/Apps/Edit', component: Edit, name: 'Apps / Edit' },
    { path: '/Apps/Calendar', component: Calendar, name: 'Apps / Calendar' },
    { path: '/Apps/Chat', component: Chat, name: 'Apps / Chat' },

    { path: '/My/Star', component: Star, name: 'My / Star' },
    { path: '/My/Info', component: Info, name: 'My / Info' },
    // { path: '/about/:id', component: AboutView },
  ],

  scrollBehavior(to, from, savedPosition) {
    return { top : 0, behavior: 'smooth' }
  },
})

export default router