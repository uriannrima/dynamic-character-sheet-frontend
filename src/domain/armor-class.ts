export class ArmorClass {
  readonly base: number = 10;
  naturalArmor: number = 0;
  deflectionModifier: number = 0;
  miscModifier: number = 0;

  constructor(model?: ArmorClass | { base?: number, naturalArmor?: number, deflectionModifier?: number, miscModifier?: number }) {
    if (model) {
      if (model.base) this.base = model.base;
      if (model.naturalArmor) this.naturalArmor = model.naturalArmor;
      if (model.deflectionModifier) this.deflectionModifier = model.deflectionModifier;
      if (model.miscModifier) this.miscModifier = model.miscModifier;
    }
  }
}

export default ArmorClass
