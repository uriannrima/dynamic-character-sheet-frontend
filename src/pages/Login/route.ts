import { RouteConfig } from 'vue-router'

import Store from '@/store';
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
  },
  {
    path: '/logout',
    async beforeEnter(to, from, next) {
      await Store.dispatch('Auth/logout');
      next('/');
    }
  }
]

export default routes
