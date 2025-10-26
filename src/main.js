import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
// Import global styles
import './assets/global.css'

createApp(App).use(router).mount('#app')