import { Login } from '../sections';

// Lazy Load Components
const CharacterSheet = () => import('../sections/CharacterSheet/CharacterSheet.vue')
const Home = () => import('../sections/Home/Home.vue')

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
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
    path: '/character',
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
