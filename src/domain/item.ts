export class Item {
  name: string = '';
  page: string = '';
  weight: number = 0;

  constructor(model?: Item | { name?: string, page?: string, weight?: number }) {
    Object.assign(this, model);
  }
}

export default Item;
