/* eslint no-unused-vars: [0] */
import Vue from 'vue'
import VueRouter, { RouteRecord, RouterOptions, Route, Next } from 'vue-router'
import routes from './routes'
import Store from '../store'

Vue.use(VueRouter)

const routerOptions: RouterOptions = {
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
}

const router = new VueRouter(routerOptions)

router.beforeEach((to: Route, _: Route, next: Next) => {
  if (to.matched.some((record: RouteRecord) => record.meta.requiresAuth)) {
    Store.dispatch('Auth/refresh').then(authenticated => {
      if (authenticated) {
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    }).catch(() => {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    })
  } else {
    next()
  }
})

export default router
