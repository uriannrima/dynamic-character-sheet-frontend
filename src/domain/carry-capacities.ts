export class CarryCapacity {
  value: number = 0;
  label: string = '';
  small: string = '';

  constructor(model?: CarryCapacity | { value?: number, label?: string, small?: string }) {
    if (model) {
      if (model.value) this.value = model.value;
      if (model.label) this.label = model.label;
      if (model.small) this.small = model.small;
    }
  }
}

export class CarryCapacities {
  [key: string]: CarryCapacity;
  lightLoad: CarryCapacity = new CarryCapacity({ label: 'Light<br>Load' });
  mediumLoad: CarryCapacity = new CarryCapacity({ label: 'Medium<br>Load' });
  heavyLoad: CarryCapacity = new CarryCapacity({ label: 'Heavy<br>Load' });
  liftOverHead: CarryCapacity = new CarryCapacity({ label: 'Lift Over<br>Head', small: 'Equals Max Load' });
  liftOffGround: CarryCapacity = new CarryCapacity({ label: 'Lift Off<br>Ground', small: '2x Max Load' });
  pushOrDrag: CarryCapacity = new CarryCapacity({ label: 'Push Or<br>Drag', small: '5x Max Load' });

  constructor(model?: CarryCapacities | {
  lightLoad?: CarryCapacity, mediumLoad?: CarryCapacity,
  heavyLoad?: CarryCapacity, liftOverHead?: CarryCapacity,
  liftOffGround?: CarryCapacity, pushOrDra?: CarryCapacity
  }) {
    Object.assign(this, model)
  }
}

export default CarryCapacities
