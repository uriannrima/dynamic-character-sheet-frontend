import { ActionTree } from 'vuex';

import { Mutations, Actions } from '@/pages/CharacterSheet/Store/Layout/mappings'
import { LayoutState } from '@/pages/CharacterSheet/Store/Layout/state';
import { RootState } from '@/store/types';
import { SelectedAttribute, AttributeType } from '@/pages/CharacterSheet/Store/Layout/types';

const getPanelNameByType = (type: AttributeType, selected: string) => {
  switch (type) {
    case AttributeType.ABILITY_SCORE: return 'ability-score-panel';
    case AttributeType.SAVING_THROW: return 'saving-throw-panel';
    case AttributeType.MISCELANEOUS: return `${selected}-panel`;
  }
}

export const actions: ActionTree<LayoutState, RootState> = {
  async [Actions.setSelectedAttribute]({ commit }, selectedAttribute: SelectedAttribute) {
    if (selectedAttribute.type && selectedAttribute.selected) {
      commit(Mutations.setSlideoutPanel, getPanelNameByType(selectedAttribute.type, selectedAttribute.selected));
      commit(Mutations.setSelectedAttribute, selectedAttribute);
      commit(Mutations.toggleSidebar);
    }
  },
  async addModifier({ commit }, modifier) {
    commit(Mutations.addSelectedAttributeModifier, modifier);
  },
  async removeModifier({ commit }, modifierIndex) {
    commit(Mutations.removeSelectedAttributeModifier, modifierIndex);
  }
}
export default actions;
