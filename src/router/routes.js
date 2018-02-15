import Character from '@/sections/character-sheet/character-sheet.component';
import Ncs from '@/sections/ncs/ncs.component';
import Print from '@/sections/character-sheet/print.component';
import Home from '@/sections/home/home.section';
import Login from '@/sections/login/login.section';

const routes = [
    {
        path: '/character/:id',
        component: Character
    },
    {
        path: '/character',
        component: Character
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/print/:id',
        component: Print
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
