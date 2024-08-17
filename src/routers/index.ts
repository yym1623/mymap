import { createWebHistory, createRouter } from 'vue-router'

// import HomeView from '@/components/HomeView.vue'
// import AboutView from '@/components/AboutView.vue'


const router = createRouter({
  history: createWebHistory(),

  routes: [
    // { path: '/', component: HomeView },
    // { path: '/about/:id', component: AboutView },
  ],

  scrollBehavior(to, from, savedPosition) {
    return { top : 0, behavior: 'smooth' }
  },
})

export default router