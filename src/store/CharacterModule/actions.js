import Mappings from './mappings';
import CharacterService from '@Services/character.service'
import ObjectUtils from '@Utils/object.utils.js';

export default {
  async [Mappings.Actions.loadCharacterAsync]({ commit }, characterId) {
    try {
      const character = await CharacterService.getData(characterId);

      commit(Mappings.Mutations.updateId, character._id);
      commit(Mappings.Mutations.updateDescription, ObjectUtils.extractFrom(character, [
        'name', 'playerName', 'race',
        'alignment', 'deity', 'age',
        'gender', 'height', 'weight',
        'eyes', 'hair', 'skin'
      ]));
      commit(Mappings.Mutations.updateClasses, character.classes);
      commit(Mappings.Mutations.updateSize, character.size);
      commit(Mappings.Mutations.updateAbilityScores, character.abilityScores);
      commit(Mappings.Mutations.updateStatus, character.status);
      commit(Mappings.Mutations.updateSpeed, character.speed);
      commit(Mappings.Mutations.updateGear, character.gear);
    } catch (error) {
      console.log(error);
    }
  },
  async updateAbilityScore({ commit }, abilityScore) {
    commit('updateAbilityScore', abilityScore);
  }
}
