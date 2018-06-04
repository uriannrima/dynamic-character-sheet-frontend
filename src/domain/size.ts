import { IEntity } from './interfaces/IEntity';

export class Size implements IEntity {
  _id: string = '';
  readonly name: string = '';
  readonly modifier: number = 0;
  readonly grappleBonus: number = 0;
  readonly hideBonus: number = 0;
  readonly carryBonus: number = 0;

  constructor(model?: Size | { _id?: string, name?: string, modifier?: number, grappleBonus?: number, hideBonus?: number, carryBonus?: number, }) {
    Object.assign(this, model);
  }
}

export default Size;

export const Fine = new Size({
  'name': 'Fine',
  'modifier': 8.0,
  'grappleBonus': -16.0,
  'hideBonus': 16.0,
  'carryBonus': 0.12
});

export const Diminutive = new Size({
  'name': 'Diminutive',
  'modifier': 4.0,
  'grappleBonus': -12.0,
  'hideBonus': 12.0,
  'carryBonus': 0.25
});

export const Tiny = new Size({
  'name': 'Tiny',
  'modifier': 2.0,
  'grappleBonus': -8.0,
  'hideBonus': 8.0,
  'carryBonus': 0.5
});

export const Small = new Size({
  'name': 'Small',
  'modifier': 1.0,
  'grappleBonus': -4.0,
  'hideBonus': 4.0,
  'carryBonus': 0.75
});

export const Medium = new Size({
  'name': 'Medium',
  'modifier': 0.0,
  'grappleBonus': 0.0,
  'hideBonus': 0.0,
  'carryBonus': 1.0
});

export const Large = new Size({
  'name': 'Large',
  'modifier': -1.0,
  'grappleBonus': 4.0,
  'hideBonus': -4.0,
  'carryBonus': 2.0
});
export const Huge = new Size({
  'name': 'Huge',
  'modifier': -2.0,
  'grappleBonus': 8.0,
  'hideBonus': -8.0,
  'carryBonus': 4.0
});

export const Gargatuan = new Size({
  'name': 'Gargantuan',
  'modifier': -4.0,
  'grappleBonus': 12.0,
  'hideBonus': -12.0,
  'carryBonus': 8.0
}
);

export const Collosal = new Size({
  'name': 'Collosal',
  'modifier': -8.0,
  'grappleBonus': 16.0,
  'hideBonus': -16.0,
  'carryBonus': 16.0
});

export const All = [
  Fine, Diminutive, Tiny, Small, Medium, Large, Huge, Gargatuan, Collosal
];
