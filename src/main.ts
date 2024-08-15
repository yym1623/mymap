import { createApp } from 'vue'
import { createNaverMap } from "vue3-naver-maps";
import App from './App.vue'


createApp(App).use(createNaverMap, {
  clientId: "w2dh3kzqxx", // Required
  category: "ncp", // Optional
  subModules: [], // Optional
}).mount('#app')
