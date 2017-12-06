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
  }
};

window.CharacterStore = CharacterStore;
export default CharacterStore;
