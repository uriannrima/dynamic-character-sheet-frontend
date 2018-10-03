export interface SelectedAttribute {
  selected?: string;
  type?: AttributeType;
  description?: string;
}

export enum AttributeType {
  ABILITY_SCORE = 'abilityScore',
  SAVING_THROW = 'savingThrow',
  MISCELANEOUS = 'miscelaneous'
}
