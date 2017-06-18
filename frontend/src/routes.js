import Character from './sections/character-sheet/character-sheet.component';

const routes = [
    {
        path: '/character/:id',
        component: Character
    }
];

export default { routes };