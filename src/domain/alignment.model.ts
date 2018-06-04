export enum NatureType {
  NEUTRAL = 'Neutral',
  GOOD = 'Good',
  EVIL = 'Evil'
};

export enum AbdictionType {
  NEUTRAL = 'Neutral',
  LAWFUL = 'Lawful',
  CHAOTIC = 'Chaotic'
}

export class Alignment {
  nature: NatureType = NatureType.NEUTRAL;
  abdiction: AbdictionType = AbdictionType.NEUTRAL;

  get description() {
    if (this.abdiction === AbdictionType.NEUTRAL && this.nature === NatureType.NEUTRAL) return 'Neutral';
    return `${this.abdiction} ${this.nature}`;
  }

  get title() {
    switch (this.abdiction) {
      case AbdictionType.LAWFUL:
        switch (this.nature) {
          case NatureType.GOOD:
            return 'Crusader'
          case NatureType.NEUTRAL:
            return 'Judge'
          case NatureType.EVIL:
            return 'Dominator'
        }
        break;
      case AbdictionType.NEUTRAL:
        switch (this.nature) {
          case NatureType.GOOD:
            return 'Benefactor'
          case NatureType.NEUTRAL:
            return 'Undecided'
          case NatureType.EVIL:
            return 'Malefactor'
        }
        break;
      case AbdictionType.CHAOTIC:
        switch (this.nature) {
          case NatureType.GOOD:
            return 'Rebel'
          case NatureType.NEUTRAL:
            return 'Free Spirit'
          case NatureType.EVIL:
            return 'Destroyer'
        }
        break;
    }
  }
}

export default Alignment;