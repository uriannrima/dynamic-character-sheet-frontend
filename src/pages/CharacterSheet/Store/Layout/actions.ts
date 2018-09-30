import { ActionTree } from 'vuex';

import { Mutations, Actions } from '@/pages/CharacterSheet/Store/Layout/mappings'
import { LayoutState } from '@/pages/CharacterSheet/Store/Layout/state';
import { RootState } from '@/store/types';

enum AttributeType {
  ABILITY_SCORE = 'abilityScore',
  SAVING_THROW = 'savingThrow'
}

const getPanelNameByType = (type: AttributeType) => {
  switch (type) {
    case AttributeType.ABILITY_SCORE: return 'ability-score-panel';
    case AttributeType.SAVING_THROW: return 'saving-throw-panel';
  }
}

const getAttribute = (rootState: any, name: string, type: AttributeType) => {
  const characterState = rootState.CharacterSheet.Character;
  switch (type) {
    case AttributeType.ABILITY_SCORE:
      return characterState['abilityScores'][name];
    case AttributeType.SAVING_THROW:
      const savingThrow = characterState['savingThrows'][name]
      savingThrow.keyAbilityScore = characterState['abilityScores'][savingThrow.keyAbility];
      return savingThrow;
  }
  return null;
}

export const actions: ActionTree<LayoutState, RootState> = {
  async [Actions.setSelectedAttribute](context, { selected, type }: { selected: string, type: AttributeType }) {
    context.commit(Mutations.setSlideoutPanel, getPanelNameByType(type));
    context.commit(Mutations.setSelectedAttribute, getAttribute(context.rootState, selected, type));
    context.commit(Mutations.toggleSidebar);
  }
}
export default actions;
