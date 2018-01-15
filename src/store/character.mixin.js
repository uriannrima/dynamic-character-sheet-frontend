import CharacterStore from './character.store';

export default {
    data() {
        return {
            character: CharacterStore.Instance.character
        };
    }
}
