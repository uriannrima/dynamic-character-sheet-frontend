import { CharacterSheet, Home, Login } from '../sections';

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/character/:id',
    component: CharacterSheet
  },
  {
    path: '/character',
    component: CharacterSheet
  },
  {
    path: '*',
    redirect: '/login'
  }
];

export default routes;
