export class Base {
  name: string = '';
  description: string = '';

  constructor(model?: Base | { name?: string, description?: string }) {
    Object.assign(this, model);
  }
}
