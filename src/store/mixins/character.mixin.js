import CharacterStore from '../character.store';

export default {
  data() {
    return {
      CharacterStore: CharacterStore.Instance
    };
  },
  computed: {
    character: {
      get() {
        return this.CharacterStore.character;
      },
      set(newValue) {
        this.CharacterStore.character = newValue;
      }
    }
  }
}
