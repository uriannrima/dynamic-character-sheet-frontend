export class Modifier {
  name: string = '';
  value: number = 0;
  temporary: boolean = false;
}

export interface IModified {
  modifiers: Modifier[];
  hasModifiers: boolean;
}
