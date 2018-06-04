import { CasterKeyAbilityType } from './enums/caster-key-ability-type';

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
