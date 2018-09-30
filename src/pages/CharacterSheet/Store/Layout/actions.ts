import { ActionTree } from 'vuex';

import { Mutations, Actions } from '@/pages/CharacterSheet/Store/Layout/mappings'
import { LayoutState } from '@/pages/CharacterSheet/Store/Layout/state';
import { RootState } from '@/store/types';
import { AttributeType, BasePanel, AbilityScorePanel, SavingThrowPanel } from '@/pages/CharacterSheet/Store/Layout/types';

const getPanelNameByType = (type: AttributeType, selected: string) => {
  switch (type) {
    case AttributeType.ABILITY_SCORE: return 'ability-score-panel';
    case AttributeType.SAVING_THROW: return 'saving-throw-panel';
    case AttributeType.MISCELANEOUS: return `${selected}-panel`;
  }
}

const getAttribute = (rootState: RootState, name: string, type: AttributeType) => {
  const characterState = rootState.CharacterSheet.Character;
  switch (type) {
    case AttributeType.ABILITY_SCORE:
      return characterState.abilityScores[name];
    case AttributeType.SAVING_THROW:
      const savingThrow = characterState.savingThrows[name];
      savingThrow.keyAbilityScore = characterState.abilityScores[savingThrow.keyAbility];
      return savingThrow;
    case AttributeType.MISCELANEOUS:
      if (name === 'initiative') {
        return {
          modifiers: characterState.initiativeModifiers
        }
      }
      break;
  }
}

export const actions: ActionTree<LayoutState, RootState> = {
  async [Actions.setSelectedAttribute]({ commit, rootState }, { selected, type }: { selected: string, type: AttributeType }) {
    commit(Mutations.setSlideoutPanel, getPanelNameByType(type, selected));
    commit(Mutations.setSelectedAttribute, getAttribute(rootState, selected, type));
    commit(Mutations.toggleSidebar);
  },
  async addModifier({ commit }, modifier) {
    commit(Mutations.addSelectedAttributeModifier, modifier);
  },
  async removeModifier({ commit }, modifierIndex) {
    commit(Mutations.removeSelectedAttributeModifier, modifierIndex);
  }
}
export default actions;
