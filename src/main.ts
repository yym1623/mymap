import { createApp } from 'vue'
import App from './App.vue'

// naver map
import { createNaverMap } from "vue3-naver-maps";

// primevue
import PrimeVue from 'primevue/config';

// store
import { createPinia } from 'pinia'

// router
import router from '@/routers'

// css
import '@/scss/font.scss'
import '@/scss/tailwind.scss'


// primevue css(필수) -> tailwinds 연동할거면 따로 설정 필요
// primevue css
// 3버전 기준 템플릿 (4버전의 aura theme 가져오는 방법 확보 후 4버전으로 변경해서 진행 (theme template자체가 4버전부터 나옴 -> primevue4랑 쓰는거 -> 일단 3으로))
import 'primevue/resources/themes/aura-light-green/theme.css' 
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'
import "primeflex/primeflex.css";

// primevue plugin (따로 등록해야함? prmevue 하나로 다 사용이 아니라 -> 등록할것도 있는거같음 -> 등록하니까 됨 -> 기본 primevue말고 해당 플러그인들은 따로 해야하는게 있나봄)
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';


createApp(App).use(createNaverMap, {  
  clientId: import.meta.env.VITE_MAP_CLIENT_ID, // Required
  category: "ncp", // Optional
  subModules: [], // Optional
}).use(PrimeVue, {
  // options
}).directive('tooltip', Tooltip).use(ToastService)
.use(createPinia()).use(router).mount('#app')
