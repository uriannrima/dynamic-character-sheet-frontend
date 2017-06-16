import Home from '../sections/home/home.component';
import CharacterSheet from '../sections/character-sheet/character-sheet.component';

export default {
    template: require('./layout.template'),
    components: {
        'dcs-home': Home,
        'dcs-character-sheet': CharacterSheet
    }
}