import { Login } from '../sections';

// Lazy Load Components
const CharacterSheet = () => import('../sections/CharacterSheet/CharacterSheet.vue')
const Home = () => import('../sections/Home/Home.vue')

const routes = [
  {
    name: 'logout',
    path: '/logout',
    beforeEnter: (to, from, next) => {
      next({
        path: '/login'
      });
    }
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      title: 'Home',
      requiresAuth: true
    }
  },
  {
    name: 'character',
    path: '/character/:id',
    component: CharacterSheet,
    meta: {
      title: 'Character',
      requiresAuth: true
    }
  },
  {
    name: 'newCharacter',
    path: '/newCharacter',
    component: CharacterSheet,
    meta: {
      title: 'Character',
      requiresAuth: true
    }
  },
  {
    path: '*',
    redirect: '/login'
  }
];

export default routes;
