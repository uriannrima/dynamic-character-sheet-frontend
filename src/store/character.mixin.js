import CharacterStore from './character.store';

export default {
  data() {
    return {
      CharacterStore: CharacterStore.Instance
    };
  },
  computed: {
    character() {
      return this.CharacterStore.character;
    }
  }
}
