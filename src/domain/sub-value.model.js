export class SubValue {
  constructor({ title = '', value = '' } = {}) {
    Object.assign(this, {
      title,
      value
    });
  }
}

export default SubValue;
