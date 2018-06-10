import { RouteConfig } from 'vue-router'

const Login = () => import('./Login.vue')

export const routes: RouteConfig[] = [
  {
    name: 'login',
    path: '/login',
    component: Login
  }
]

export default routes
