export class Description {
  constructor({
    name = '', player = '', race = '',
    alignment = '', deity = '', age = '',
    gender = '', height = '', weight = '',
    eyes = '', hair = '', skin = '' } = {}) {
    Object.assign(this, {
      name,
      player,
      race,
      alignment,
      deity,
      age,
      gender,
      height,
      weight,
      eyes,
      hair,
      skin
    });
  }
}

export default Description;
