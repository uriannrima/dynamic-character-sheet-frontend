import CharacterService from '../services/character.service';

const CharacterStore = {
  Instance: {
    character: CharacterService.create()
  },
  async loadCharacter(id) {
    try {
      var character = await CharacterService.get(id);
      this.Instance.character = character;
      return true;
    } catch (error) {
      console.log(error);
    }
  },
  async saveCharacter(character) {
    try {
      this.Instance.character = await CharacterService.saveOrUpdate(character || this.Instance.character);
      return true;
    } catch (error) {
      console.log(error);
    }
  },
  async createCharacter() {
    try {
      this.Instance.character = await CharacterService.create();
      return true;
    } catch (error) {
      console.log(error);
    }
  }
};

window.CharacterStore = CharacterStore;
export default CharacterStore;
