export class CarryCapacity {
  value: number = 0;
  label: string = '';
  small: string = '';

  constructor(model?: CarryCapacity | { value?: number, label?: string, small?: string }) {
    Object.assign(this, model);
  }
}

export class CarryCapacities {
  lightLoad: CarryCapacity = new CarryCapacity({ label: 'Light<br>Load' });
  mediumLoad: CarryCapacity = new CarryCapacity({ label: 'Medium<br>Load' });
  heavyLoad: CarryCapacity = new CarryCapacity({ label: 'Heavy<br>Load' });
  liftOverHead: CarryCapacity = new CarryCapacity({ label: 'Lift Over<br>Head', small: 'Equals Max Load' });
  liftOffGround: CarryCapacity = new CarryCapacity({ label: 'Lift Off<br>Ground', small: '2x Max Load' });
  pushOrDrag: CarryCapacity = new CarryCapacity({ label: 'Push Or<br>Drag', small: '5x Max Load' });
}

export default CarryCapacities;
