export class Grapple {
  baseAttackBonus: number = 0;
  strengthModifier: number = 0;
  sizeModifier: number = 0;
  miscModifier: number = 0;

  constructor (model?: Grapple | { baseAttackBonus?: number, strengthModifier?: number, sizeModifier?: number, miscModifier?: number }) {
    Object.assign(this, model)
  }
}

export default Grapple
