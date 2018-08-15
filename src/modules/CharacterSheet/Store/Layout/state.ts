
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
}
