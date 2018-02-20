import Ncs from '@/sections/ncs/ncs.component';
import Home from '@/sections/home/home.section';
import Login from '@/sections/login/login.section';

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
    path: '/ncs/:id',
    component: Ncs
  },
  {
    path: '/ncs',
    component: Ncs
  },
  {
    path: '*',
    redirect: '/login'
  }
];

export default routes;
