import { GetterTree } from 'vuex'
import { CharacterSheetState } from '@/pages/CharacterSheet/Store/state';
import { RootState } from '@/store/types';
import { AttributeType } from '@/pages/CharacterSheet/Store/Layout/types';

const getCollectionByTypeName = (type: AttributeType, name: string) => {
  switch (type) {
    case AttributeType.ABILITY_SCORE:
      return 'abilityScores';
    case AttributeType.SAVING_THROW:
      return 'savingThrows';
  }
}

export const getters: GetterTree<CharacterSheetState, RootState> = {
  getSelectedAttribute: state => {
    const { selectedAttribute: { selected, type } } = state.Layout;
    if (selected && type) {
      const collection = getCollectionByTypeName(type, selected);
      if (collection) return state.Character[collection][selected];
    }
    return null;
  },
  getSelectedAttributeDescription: state => {
    return state.Layout.selectedAttribute.description;
  }
}
export default getters
