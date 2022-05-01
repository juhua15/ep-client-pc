import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/styles/common.less'
import App from './App.vue'
import router from './router'
import store from './store'
import UI from '@/components/library'
createApp(App).use(store).use(UI).use(router).mount('#app')
