import Mappings from './mappings';
import CharacterService from 'services/character.service'
import ObjectUtils from 'utils/object.utils.js';
import NotificationService from 'services/NotificationService';

export default {
  async [Mappings.Actions.connect](context, characterId) {
    // Ask for the server to connect to character channel.
    CharacterService.connect(characterId);

    // If the server send a patched, we update ourself
    CharacterService.register('patched', ({ mutation, delta }) => {
      const firstKey = Object.keys(delta)[0];

      const toRegularForm = function (unregularString) {
        return unregularString
          // insert a space before all caps
          .replace(/([A-Z])/g, ' $1')
          // uppercase the first character
          .replace(/^./, function (str) {
            return str.toUpperCase();
          })
      };

      const regular = toRegularForm(firstKey);
      NotificationService.notify({
        type: 'success',
        message: `Your sheet has been updated.\n${regular}: ${delta[firstKey]}.`
      });
      Store.commit(mutation.join('/'), delta);
    });
  },
  async [Mappings.Actions.saveCharacter]({ commit, state }) {
    const character = await CharacterService.saveOrUpdate(state);
    commit(Mappings.Mutations.updateId, character._id);
  },
  async [Mappings.Actions.loadCharacter]({ commit }, characterId) {
    try {
      const character = await CharacterService.getData(characterId);

      commit(Mappings.Mutations.updateId, character._id);
      commit(Mappings.Mutations.updateDescription, ObjectUtils.extractFrom(character, [
        'name', 'playerName', 'race',
        'alignment', 'deity', 'age',
        'gender', 'height', 'weight',
        'eyes', 'hair', 'skin'
      ]));
      commit(Mappings.Mutations.updateClasses, character);
      commit(Mappings.Mutations.updateSize, character);
      commit(Mappings.Mutations.updateAbilityScores, character.abilityScores);
      commit(Mappings.Mutations.updateStatus, character.status);
      commit(Mappings.Mutations.updateSpeed, character);
      commit(Mappings.Mutations.updateGear, character.gear);
      commit(Mappings.Mutations.updateArmorClass, character.armorClass);
      commit(Mappings.Mutations.updateDamageReduction, character);
    } catch (error) {
      console.log(error);
    }
  },
  async [Mappings.Actions.updateDescription]({ commit, state }, description) {

    commit(Mappings.Mutations.updateDescription, description);
    CharacterService.patch(state._id, {
      mutation: ['CharacterModule', Mappings.Mutations.updateDescription],
      payload: description
    });

  },
  async [Mappings.Actions.updateClasses]({ commit, state }, classes) {

    commit(Mappings.Mutations.updateClasses, classes);
    CharacterService.patch(state._id, {
      mutation: ['CharacterModule', Mappings.Mutations.updateClasses],
      payload: classes
    });

  },
  async [Mappings.Actions.updateSize]({ commit, state }, size) {

    commit(Mappings.Mutations.updateSize, size);
    CharacterService.patch(state._id, {
      mutation: ['CharacterModule', Mappings.Mutations.updateSize],
      payload: size
    });

  },
  async [Mappings.Actions.updateAbilityScore]({ commit, state }, abilityScore) {

    commit(Mappings.Mutations.updateAbilityScore, abilityScore);
    CharacterService.patch(state._id, {
      mutation: ['CharacterModule', Mappings.Mutations.updateAbilityScore],
      payload: {
        abilityScores: state.abilityScores
      }
    });

  },
  async [Mappings.Actions.updateStatus]({ commit, state }, status) {

    commit(Mappings.Mutations.updateStatus, status);
    CharacterService.patch(state._id, {
      mutation: ['CharacterModule', Mappings.Mutations.updateStatus],
      payload: {
        status: state.status
      }
    });

  },
  async [Mappings.Actions.updateSpeed]({ commit, state }, speed) {

    commit(Mappings.Mutations.updateSpeed, speed);
    CharacterService.patch(state._id, {
      mutation: ['CharacterModule', Mappings.Mutations.updateSpeed],
      payload: speed
    });

  },
  async [Mappings.Actions.updateGear]({ commit, state }, gear) {

    commit(Mappings.Mutations.updateGear, gear);
    CharacterService.patch(state._id, {
      mutation: ['CharacterModule', Mappings.Mutations.updateGear],
      payload: {
        gear: state.gear
      }
    });

  },
  async [Mappings.Actions.updateArmorClass]({ commit, state }, armorClass) {

    commit(Mappings.Mutations.updateArmorClass, armorClass);
    CharacterService.patch(state._id, {
      mutation: ['CharacterModule', Mappings.Mutations.updateArmorClass],
      payload: {
        armorClass: state.armorClass
      }
    });

  },
  async [Mappings.Actions.updateDamageReduction]({ commit, state }, damageReduction) {

    commit(Mappings.Mutations.updateDamageReduction, damageReduction);
    CharacterService.patch(state._id, {
      mutation: ['CharacterModule', Mappings.Mutations.updateDamageReduction],
      payload: damageReduction
    });

  },
  async [Mappings.Actions.updateInitiative]({ commit, state }, initiative) {

    commit(Mappings.Mutations.updateInitiative, initiative);
    CharacterService.patch(state._id, {
      mutation: ['CharacterModule', Mappings.Mutations.updateInitiative],
      payload: {
        initiative: state.initiative
      }
    });

  },
  async [Mappings.Actions.updateSavingThrow]({ commit, state }, savingThrow) {

    commit(Mappings.Mutations.updateSavingThrow, savingThrow);
    CharacterService.patch(state._id, {
      mutation: ['CharacterModule', Mappings.Mutations.updateSavingThrow],
      payload: {
        savingThrows: state.savingThrows
      }
    });

  }
}
