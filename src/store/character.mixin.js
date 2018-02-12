import CharacterStore from './character.store';

export default {
    data() {
        return {
            character: CharacterStore.Instance.character
        };
    },
    beforeCreate: function () {
        CharacterStore.onReferenceUpdate((character) => {
            this.character = character;
        });
    }
}
