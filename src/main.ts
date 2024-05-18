import { createApp } from 'vue'
import './index.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import { router } from './router'
import { pinia } from './stores'

createApp(App).use(VueQueryPlugin).use(router).use(pinia).mount('#app')
