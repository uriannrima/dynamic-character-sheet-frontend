
interface Section {
  label: string;
  value: string;
};

export class LayoutState {
  isLoading: boolean = false;
  isSectionMenuOpen: boolean = false;
  isSidebarOpen: boolean = false;
  sections: Section[] = [
    { label: 'ability & saves', value: 'ability-saves-section' },
    { label: 'skills', value: 'skills-section' },
    { label: 'combat', value: 'combat-section' },
    { label: 'inventory', value: 'inventory-section' },
    { label: 'spells', value: 'spells-section' },
    { label: 'feats', value: 'feats-section' },
    { label: 'special abilities', value: 'special-abilities-section' },
    { label: 'languages', value: 'languages-section' }
  ];
  selectedSection: string = this.sections[0].value;
  selectedAttribute: any = {};
}
