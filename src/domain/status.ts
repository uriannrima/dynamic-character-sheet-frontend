export class Status {
  healthPoints: number = 1;
  wounds: string = '';
  nonLethalDamage: number = 0;

  constructor(model?: Status | { healthPoints?: number, wounds?: string, nonLethalDamage?: number }) {
    if (model) {
      if (model.healthPoints) this.healthPoints = model.healthPoints;
      if (model.wounds) this.wounds = model.wounds;
      if (model.nonLethalDamage) this.nonLethalDamage = model.nonLethalDamage;
    }
  }
}

export default Status
