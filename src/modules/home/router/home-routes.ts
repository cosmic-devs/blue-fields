import { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]
