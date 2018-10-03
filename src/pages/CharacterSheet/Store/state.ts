import { LayoutState } from '@/pages/CharacterSheet/Store/Layout/state';
import { CharacterState } from '@/pages/CharacterSheet/Store/Character/state';

export interface CharacterSheetState {
  message: string;
  Layout: LayoutState;
  Character: CharacterState;
}
