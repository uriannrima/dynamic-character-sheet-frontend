import { RouteConfig } from 'vue-router'

const Login = () => import('./Login.vue')

export const routes: RouteConfig[] = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    path: '*',
    redirect: '/login'
  }
]

export default routes
