import Character from './sections/character-sheet/character-sheet.component';
import Print from './sections/character-sheet/print.component';
import Skills from './sections/skills/skills.section';
import Home from './sections/home/home.section';
import Login from './sections/login/login.section';
import Logout from './sections/login/logout.section';

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
        path: '/skills',
        component: Skills
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/',
        component: Login
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/print/:id',
        component: Print
    }, {
        path: '*',
        redirect: '/'
    }
];

export default { routes };
