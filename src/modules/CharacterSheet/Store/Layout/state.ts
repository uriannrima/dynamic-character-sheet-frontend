import { IMap } from "@/domain/interfaces/IMap";
import { AbilityScore, SavingThrow, Skill } from "@/domain";

export class SheetBlock {
  _id: string = '';
  name: string = '';
  snippet: string = '';
  description?: string;
}

export class Sheet {
  abilityScore?: IMap<AbilityScore>;
  savingThrow?: IMap<SavingThrow>;
  miscelaneous?: IMap<SheetBlock>;
}

export class LayoutState {
  isLoading: boolean = false;
  isSectionMenuOpen: boolean = false;
  isSidebarOpen: boolean = false;
  sections: string[] = [
    'ability & saves',
    'skills',
    'combat',
    'inventory',
    'spells',
    'feats',
    'special abilities',
    'languages'
  ];
  selectedSection: string = this.sections[0];
  portalName: string = '';
  sheet: Sheet = {}
}
