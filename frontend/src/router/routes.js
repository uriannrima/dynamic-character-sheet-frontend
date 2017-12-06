import Character from '@/sections/character-sheet/character-sheet.component';
import Ncs from '@/sections/ncs/ncs.component';
import Print from '@/sections/character-sheet/print.component';
import Home from '@/sections/home/home.section';
import Login from '@/sections/login/login.section';

const routes = [
    {
        path: '/character/:id',
        component: Character,
        meta: { requiresAuth: true }
    },
    {
        path: '/character',
        component: Character,
        meta: { requiresAuth: true }
    },
    {
        path: '/home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/print/:id',
        component: Print,
        meta: { requiresAuth: true }
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
        path: '*',
        redirect: '/login'
    }
];

export default routes;
