import Mappings from './mappings';
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
  CharacterService.patch(state._id, {
    mutation: ['CharacterModule', mutation],
    payload: payload
  });
}

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
    commit(Mappings.Mutations.updateId, character);
  },
  async [Mappings.Actions.newCharacter]({ commit }) {
    commit(Mappings.Mutations.newCharacter);
  },
  async [Mappings.Actions.loadCharacter]({ commit }, characterId) {
    try {
      const character = await CharacterService.getData(characterId);

      // Load character mutations
      [
        Mappings.Mutations.updateId,
        Mappings.Mutations.updateDescription,
        Mappings.Mutations.updateClasses,
        Mappings.Mutations.updateSize,
        Mappings.Mutations.updateAbilityScores,
        Mappings.Mutations.updateStatus,
        Mappings.Mutations.updateSpeed,
        Mappings.Mutations.updateGear,
        Mappings.Mutations.updateArmorClass,
        Mappings.Mutations.updateInitiative,
        Mappings.Mutations.updateSavingThrows,
        Mappings.Mutations.updateDamageReduction,
        Mappings.Mutations.updateBaseAttackBonus,
        Mappings.Mutations.updateSpellResistance,
        Mappings.Mutations.updateAttacks,
        Mappings.Mutations.updateSkills,
        Mappings.Mutations.updateCampaign,
        Mappings.Mutations.updateExperience
      ].forEach(mutation => {
        commit(mutation, character);
      });
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
  async [Mappings.Actions.updateClasses](context, classes) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateClasses, classes);
  },
  async [Mappings.Actions.updateSize](context, { size }) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateSize, { size }, true);
  },
  async [Mappings.Actions.updateAbilityScore](context, abilityScore) {
    commitAndSyncWithServer(context, {
      mutation: Mappings.Mutations.updateAbilityScore,
      syncMutation: Mappings.Mutations.updateAbilityScores
    }, abilityScore, 'abilityScores');
  },
  async [Mappings.Actions.updateStatus](context, status) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateStatus, { status }, true);
  },
  async [Mappings.Actions.updateSpeed](context, speed) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateSpeed, speed);
  },
  async [Mappings.Actions.updateGear](context, gear) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateGear, { gear }, true);
  },
  async [Mappings.Actions.updateArmorClass](context, armorClass) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateArmorClass, { armorClass }, true);
  },
  async [Mappings.Actions.updateDamageReduction](context, damageReduction) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateDamageReduction, damageReduction);
  },
  async [Mappings.Actions.updateInitiative](context, initiative) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateInitiative, { initiative });
  },
  async [Mappings.Actions.updateSavingThrow](context, savingThrow) {
    commitAndSyncWithServer(context, {
      mutation: Mappings.Mutations.updateSavingThrow,
      syncMutation: Mappings.Mutations.updateSavingThrows
    }, savingThrow, 'savingThrows');
  },
  async [Mappings.Actions.updateConditionModifiers](context, conditionModifiers) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateConditionModifiers, conditionModifiers);
  },
  async [Mappings.Actions.updateBaseAttackBonus](context, baseAttackBonus) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateBaseAttackBonus, baseAttackBonus);
  },
  async [Mappings.Actions.updateSpellResistance](context, spellResistance) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateSpellResistance, spellResistance);
  },
  async [Mappings.Actions.updateAttack]({ commit, state }, attack) {
    commit(Mappings.Mutations.updateAttack, attack);
    syncWithServer(state, Mappings.Mutations.updateAttacks, {
      attacks: state.attacks
    });
  },
  async [Mappings.Actions.updateCampaign](context, campaign) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateCampaign, campaign);
  },
  async [Mappings.Actions.updateExperience](context, experience) {
    commitAndSyncWithServer(context, Mappings.Mutations.updateExperience, experience);
  }
}
