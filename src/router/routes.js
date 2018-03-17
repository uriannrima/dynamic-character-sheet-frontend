import { CharacterSheet, Home, Login } from '../sections';

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/character/:id',
    component: CharacterSheet,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/character',
    component: CharacterSheet,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    redirect: '/login'
  }
];

export default routes;
