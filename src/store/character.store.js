import CharacterService from '../services/character.service';

const CharacterStore = {
  registered: [],
  Instance: {
    character: CharacterService.create()
  },
  async toModel(character) {
    return await CharacterService.create(character);
  },
  async loadCharacter(id) {
    try {
      this.Instance.character = await CharacterService.get(id);
      return this.Instance.character;
    } catch (error) {
      console.log(error);
    }
  },
  async saveCharacter(character) {
    try {
      this.Instance.character = await CharacterService.saveOrUpdate(character || this.Instance.character);
      return this.Instance.character;
    } catch (error) {
      console.log(error);
    }
  },
  async createCharacter() {
    try {
      this.Instance.character = await CharacterService.create();
      return this.Instance.character;
    } catch (error) {
      console.log(error);
    }
  }
};

window.CharacterStore = CharacterStore;
export default CharacterStore;
