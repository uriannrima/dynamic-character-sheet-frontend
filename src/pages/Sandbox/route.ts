import { RouteConfig } from 'vue-router'

const Sandbox = () => import('./Sandbox.vue')

export const routes: RouteConfig[] = [
  {
    name: 'sandbox',
    path: '/sandbox',
    component: Sandbox,
    meta: {
      title: 'Sandbox'
    }
  }
]

export default routes
