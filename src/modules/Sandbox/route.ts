import { RouteConfig } from 'vue-router'

const Sandbox = () => import('./Sandbox.vue')

export const routes: RouteConfig[] = [
  {
    name: 'sandbox',
    path: '/sandbox',
    component: Sandbox
  }
]

export default routes
