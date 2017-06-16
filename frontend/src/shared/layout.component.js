import Home from '../sections/home/home.component.js';
import CharacterSheet from '../sections/character-sheet/character-sheet.component.js';

export default {
    template: require('./layout.template.html'),
    components: {
        'dcs-home': Home,
        'dcs-character-sheet': CharacterSheet
    }
}