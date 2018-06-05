import { RouteConfig } from 'vue-router'

const Home = () => import('./Home.vue')

export const routes: RouteConfig[] = [
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      title: 'Home',
      requiresAuth: true
    }
  }
]

export default routes
