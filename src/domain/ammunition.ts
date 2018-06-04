export class Ammunition {
  name: string = '';
  quantity: number = 0;
  notes: string = '';

  constructor(model?: Ammunition | { name?: string, quantity?: number, notes?: string }) {
    Object.assign(this, model);
  }
}

export default Ammunition;
