import { CasterKeyAbilityType } from './ability-score.model';

export class Classe {
  name?: string = '';
  level?: number = 0;
  casterAbility?: CasterKeyAbilityType = CasterKeyAbilityType.NONE;

  constructor(model?: Classe | { name?: string, level?: number, casterAbility?: CasterKeyAbilityType }) {
    Object.assign(this, model);
  }

  get isCaster() {
    return this.casterAbility != CasterKeyAbilityType.NONE;
  }
}

export default Classe;
