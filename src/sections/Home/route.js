const Home = () => import('./Home');

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
