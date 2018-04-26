export class CarryCapacity {
  constructor({ value = 0, label = '', small = '' } = {}) {
    Object.assign(this, {
      value,
      label,
      small
    });
  }
}

export const All = [
  new CarryCapacity({ label: 'Light<br>Load' }),
  new CarryCapacity({ label: 'Medium<br>Load' }),
  new CarryCapacity({ label: 'Heavy<br>Load' }),
  new CarryCapacity({ label: 'Lift Over<br>Head', small: 'Equals Max Load' }),
  new CarryCapacity({ label: 'Lift Off<br>Ground', small: '2x Max Load' }),
  new CarryCapacity({ label: 'Push Or<br>Drag', small: '5x Max Load' })
];

export class CarryCapacities {
  constructor() {
    Object.assign(this, {
      lightLoad: new CarryCapacity({ label: 'Light<br>Load' }),
      mediumLoad: new CarryCapacity({ label: 'Medium<br>Load' }),
      heavyLoad: new CarryCapacity({ label: 'Heavy<br>Load' }),
      liftOverHead: new CarryCapacity({ label: 'Lift Over<br>Head', small: 'Equals Max Load' }),
      liftOffGround: new CarryCapacity({ label: 'Lift Off<br>Ground', small: '2x Max Load' }),
      pushOrDrag: new CarryCapacity({ label: 'Push Or<br>Drag', small: '5x Max Load' })
    });
  }
}

export default CarryCapacities;
