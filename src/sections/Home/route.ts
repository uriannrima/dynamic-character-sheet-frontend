const Home = () => import('./Home.vue');

export default [
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      title: 'Home',
      requiresAuth: true
    }
  }
];
