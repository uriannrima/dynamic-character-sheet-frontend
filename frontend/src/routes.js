import Character from './sections/character-sheet/character-sheet.component';
import Print from './sections/character-sheet/print.component';
import Skills from './sections/skills/skills.section';
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
        path: '/skills',
        component: Skills
    },
    {
        path: '/',
        component: Home
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
