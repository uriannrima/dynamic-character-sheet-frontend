export class Base {
  name: string = '';
  description: string = '';

  constructor(model?: Base | { name?: string, description?: string }) {
    if (model) {
      if (model.name) this.name = model.name
      if (model.description) this.description = model.description
    }
  }
}
