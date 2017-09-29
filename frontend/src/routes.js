import Character from './sections/character-sheet/character-sheet.component';
import Home from './sections/home/home.component';

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
        path: '/',
        component: Home
    }, {
        path: '*',
        redirect: '/'
    }
];

export default { routes };
