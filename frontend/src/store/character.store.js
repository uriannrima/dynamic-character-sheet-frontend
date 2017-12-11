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
    return this.Instance.character == null;
  },
  async saveCharacter(character) {
    try {
      this.Instance.character = await CharacterService.saveOrUpdate(character || this.Instance.character);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
};

window.CharacterStore = CharacterStore;
export default CharacterStore;
