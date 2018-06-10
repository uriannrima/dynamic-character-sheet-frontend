export class ArmorClass {
  readonly base: number = 10;
  naturalArmor: number = 0;
  deflectionModifier: number = 0;
  miscModifier: number = 0;

  constructor (model?: ArmorClass | { base?: number, bonus?: number, shieldBonus?: number, dexModifier?: number, sizeModifier?: number, naturalArmor?: number, deflectionModifier?: number, miscModifier?: number }) {
    Object.assign(this, model)
  }
}

export default ArmorClass
