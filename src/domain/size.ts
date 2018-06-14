import { IEntity } from './interfaces/IEntity'

export class Size implements IEntity {
  readonly _id: string = '';
  readonly name: string = '';
  readonly modifier: number = 0;
  readonly grappleBonus: number = 0;
  readonly hideBonus: number = 0;
  readonly carryBonus: number = 0;

  constructor(model?: Size | {
    _id?: string, name?: string, modifier?: number,
    grappleBonus?: number, hideBonus?: number, carryBonus?: number,
  }) {
    if (model) {
      if (model._id) this._id = model._id;
      if (model.name) this.name = model.name;
      if (model.modifier) this.modifier = model.modifier;
      if (model.grappleBonus) this.grappleBonus = model.grappleBonus;
      if (model.hideBonus) this.hideBonus = model.hideBonus;
      if (model.carryBonus) this.carryBonus = model.carryBonus;
    }
  }
}

export default Size
