import { Actions, Mutations } from './mappings';
import CharacterService from 'services/character.service'
import NotificationService from 'services/NotificationService';

const commitAndSyncWithServer = function ({ commit, state }, mutation, payload, fromState) {
  var syncMutation = mutation;
  if (typeof mutation === 'object') {
    syncMutation = mutation.syncMutation;
    mutation = mutation.mutation;
  }
  commit(mutation, payload);
  if (typeof fromState === 'boolean' && fromState) {
    const propertyName = Object.keys(payload)[0];
    payload = { [propertyName]: state[propertyName] };
  } else if (typeof fromState === 'string') {
    payload = { [fromState]: state[fromState] };
  }
  syncWithServer(state, syncMutation, payload);
};

const syncWithServer = function (state, mutation, payload) {
  const { _id } = state;
  if (_id) {
    CharacterService.patch(_id, {
      mutation: ['CharacterModule', mutation],
      payload: payload
    });
  }
}

export default {
  async [Actions.connect](context, characterId) {
    // Ask for the server to connect to character channel.
    CharacterService.connect(characterId);
  },
  async [Actions.saveCharacter]({ commit, state }) {
    const character = await CharacterService.saveOrUpdate(state);
    commit(Mutations.updateId, character);
  },
  async [Actions.newCharacter]({ commit }) {
    commit(Mutations.newCharacter);
  },
  async [Actions.loadCharacter]({ commit }, characterId) {
    try {
      const character = await CharacterService.getData(characterId);

      // Load character mutations
      [
        Mutations.updateId,
        Mutations.updateDescription,
        Mutations.updateClasses,
        Mutations.updateSize,
        Mutations.updateAbilityScores,
        Mutations.updateStatus,
        Mutations.updateSpeed,
        Mutations.updateGear,
        Mutations.updateArmorClass,
        Mutations.updateInitiative,
        Mutations.updateSavingThrows,
        Mutations.updateDamageReduction,
        Mutations.updateBaseAttackBonus,
        Mutations.updateSpellResistance,
        Mutations.updateAttacks,
        Mutations.updateSkills,
        Mutations.updateCampaign,
        Mutations.updateExperience,
        Mutations.updateItems,
        Mutations.updateFeats,
        Mutations.updateSpecialAbilities,
        Mutations.updateLanguages,
        Mutations.updateSpells,
      ].forEach(mutation => {
        commit(mutation, character);
      });
    } catch ({ message }) {
      NotificationService.error({
        message
      });
    }
  },
  async [Actions.updateDescription]({ commit }, description) {
    commit(Mutations.updateDescription, { description }, {
      meta: { sync: true }
    });
  },
  async [Actions.updateClasses](context, classes) {
    commitAndSyncWithServer(context, Mutations.updateClasses, classes);
  },
  async [Actions.updateSize](context, { size }) {
    commitAndSyncWithServer(context, Mutations.updateSize, { size }, true);
  },
  async [Actions.updateAbilityScore](context, abilityScore) {
    commitAndSyncWithServer(context, {
      mutation: Mutations.updateAbilityScore,
      syncMutation: Mutations.updateAbilityScores
    }, abilityScore, 'abilityScores');
  },
  async [Actions.updateStatus](context, status) {
    commitAndSyncWithServer(context, Mutations.updateStatus, { status }, true);
  },
  async [Actions.updateSpeed](context, speed) {
    commitAndSyncWithServer(context, Mutations.updateSpeed, speed);
  },
  async [Actions.updateGear](context, gear) {
    commitAndSyncWithServer(context, Mutations.updateGear, { gear }, true);
  },
  async [Actions.updateArmorClass](context, armorClass) {
    commitAndSyncWithServer(context, Mutations.updateArmorClass, { armorClass }, true);
  },
  async [Actions.updateDamageReduction](context, damageReduction) {
    commitAndSyncWithServer(context, Mutations.updateDamageReduction, damageReduction);
  },
  async [Actions.updateInitiative](context, initiative) {
    commitAndSyncWithServer(context, Mutations.updateInitiative, { initiative });
  },
  async [Actions.updateSavingThrow](context, savingThrow) {
    commitAndSyncWithServer(context, {
      mutation: Mutations.updateSavingThrow,
      syncMutation: Mutations.updateSavingThrows
    }, savingThrow, 'savingThrows');
  },
  async [Actions.updateConditionModifiers](context, conditionModifiers) {
    commitAndSyncWithServer(context, Mutations.updateConditionModifiers, conditionModifiers);
  },
  async [Actions.updateBaseAttackBonus](context, baseAttackBonus) {
    commitAndSyncWithServer(context, Mutations.updateBaseAttackBonus, baseAttackBonus);
  },
  async [Actions.updateSpellResistance](context, spellResistance) {
    commitAndSyncWithServer(context, Mutations.updateSpellResistance, spellResistance);
  },
  async [Actions.updateAttack]({ commit, state }, attack) {
    commit(Mutations.updateAttack, attack);
    syncWithServer(state, Mutations.updateAttacks, {
      attacks: state.attacks
    });
  },
  async [Actions.updateCampaign](context, campaign) {
    commitAndSyncWithServer(context, Mutations.updateCampaign, campaign);
  },
  async [Actions.updateExperience](context, experience) {
    commitAndSyncWithServer(context, Mutations.updateExperience, experience);
  }
}
