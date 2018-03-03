import Mappings from './mappings';
import CharacterService from 'Services/character.service'

export default {
  async [Mappings.Actions.loadCharacterAsync]({ commit }, characterId) {
    try {
      const character = await CharacterService.getData(characterId);
      commit(Mappings.Mutations.loadCharacter, character);
    } catch (error) {
      console.log(error);
    }
  },
  async updateAbilityScore({ commit }, abilityScore) {
    commit('updateAbilityScore', abilityScore);
  }
}
