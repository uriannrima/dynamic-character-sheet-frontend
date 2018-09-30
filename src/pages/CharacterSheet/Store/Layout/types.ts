import { Modifier } from '@/domain/interfaces/IModified';

export enum AttributeType {
  ABILITY_SCORE = 'abilityScore',
  SAVING_THROW = 'savingThrow',
  MISCELANEOUS = 'miscelaneous'
}

export interface BasePanel {
  name: string;
  modifier: string | number;
  snippet: string;
  description: string;
}

export interface ManageablePanel extends BasePanel {
  manageable: boolean;
  base: number;
  modifiers: Modifier[];
}

export interface AbilityScorePanel extends ManageablePanel {
}

export interface SavingThrowPanel extends ManageablePanel {
  abilityModifier: number | string;
}
