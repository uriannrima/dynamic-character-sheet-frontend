import CharacterService from '../services/character.service';

const CharacterStore = {
  registered: [],
  Instance: {
    character: CharacterService.create()
  },
  async onReferenceUpdate(callback) {
    this.registered.push(callback);
  },
  async notifyReferenceUpdate(reference) {
    for (var callback of this.registered) {
      callback(reference);
    }
  },
  async toModel(character) {
    return await CharacterService.create(character);
  },
  async loadCharacter(id) {
    try {
      var character = await CharacterService.get(id);
      this.Instance.character = character;
      this.notifyReferenceUpdate(this.Instance.character);
      return true;
    } catch (error) {
      console.log(error);
    }
  },
  async saveCharacter(character) {
    try {
      this.Instance.character = await CharacterService.saveOrUpdate(character || this.Instance.character);
      this.notifyReferenceUpdate(this.Instance.character);
      return true;
    } catch (error) {
      console.log(error);
    }
  },
  async createCharacter() {
    try {
      this.Instance.character = await CharacterService.create();
      this.notifyReferenceUpdate(this.Instance.character);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
};

window.CharacterStore = CharacterStore;
export default CharacterStore;
