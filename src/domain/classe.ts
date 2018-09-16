import { CasterKeyAbilityType } from '@/domain/enums/caster-key-ability-type'

export class Classe {
  name: string = '';
  level: number = 0;
  casterAbility: CasterKeyAbilityType = CasterKeyAbilityType.NONE;

  constructor(model?: Classe | { name?: string, level?: number, casterAbility?: CasterKeyAbilityType }) {
    if (model) {
      if (model.name) this.name = model.name;
      if (model.level) this.level = model.level;
      if (model.casterAbility) this.casterAbility = model.casterAbility;
    }
  }

  get isCaster() {
    return this.casterAbility !== CasterKeyAbilityType.NONE
  }
}

export default Classe
