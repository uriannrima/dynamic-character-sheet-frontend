import { AuthState } from '@/store/modules/auth/state';
import { CharacterSheetState } from '@/pages/CharacterSheet/Store/state';

export interface RootState {
  version: string;
  Auth?: AuthState;
  CharacterSheet?: CharacterSheetState;
}
