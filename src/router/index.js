import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Store.dispatch('AuthModule/refresh').then(authenticated => {
      if (authenticated) {
        next();
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        });
      }
    });
  } else {
    next();
  }
});

export default router;
