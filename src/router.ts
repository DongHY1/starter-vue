import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/pages/NotFound.vue'
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
