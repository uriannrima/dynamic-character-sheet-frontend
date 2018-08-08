<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Spells</span>
    <div class="resume-cards__body--column">
      <span v-if="spells.length <= 0"
            class="list--no-items">No spells</span>
      <div v-else>
        <spells-group v-for="(spells, key) in spellsGroupedByLevel"
                      :key="key"
                      :level="key"
                      :spells="spells"
                      :ability-scores="abilityScores"
                      :base-attatck-bonus="baseAttackBonus">
        </spells-group>
      </div>
    </div>
  </div>
</template>

<script>
import SpellsGroup from './SpellsGroup.vue';

export default {
  components: { SpellsGroup },
  props: {
    spells: {
      type: Array,
      default: () => []
    },
    classes: {
      type: Object,
      default: () => {}
    },
    abilityScores: {
      type: Object,
      required: true
    },
    baseAttackBonus: {
      type: Number,
      default: 0
    }
  },
  computed: {
    spellsGroupedByLevel() {
      return this.spells
        .orderBy(spell => spell.name)
        .groupBy(spell => spell.level);
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.spells__header,
.spell {
  &__action {
    width: $spell__action--width;
    button {
      font-size: 12px;
      width: 32px;
      height: 32px;
      padding: 0;
    }
  }
  &__name {
    width: $spell__name--width;
    padding-left: 4px;
  }
  &__time {
    width: $spell__time--width;
    text-align: center;
  }
  &__range {
    width: $spell__range--width;
    text-align: center;
  }
  &__dchit {
    width: $spell__dchit--width;
    text-align: center;
  }
  &__effects {
    width: $spell__effects--width;
  }
}

.spells {
  &__header {
    display: flex;
    span {
      font-size: 11px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  &__group {
    &__header {
      border-bottom: solid 1px $secodary-border__color;
      padding: 5px 0 0 5px;

      span {
        font-size: 13px;
        color: $spells__group__header--color;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }

  &__list {
    padding-bottom: 8px;
  }
}

.spell {
  display: flex;

  span {
    font-size: 14px;
  }

  &__action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__name,
  &__time,
  &__range,
  &__dchit,
  &__effects {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__time,
  &__range,
  &__dchit {
    align-items: center;
  }

  &__action {
    &__cast {
      width: 32px;
      height: 24px;
      background-color: $spell__action__cast--color;

      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;

      span {
        color: white;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
      }
    }
  }

  &__name {
    font-style: italic;

    small {
      font-size: 10px;
      color: $secondary-value__color;
    }
  }

  &__dchit {
    &__saving-throw {
      font-size: 12px;
      font-weight: bold;
    }
    &__modifier {
      text-transform: uppercase;
      font-weight: bold;
    }
    &__resolve {
      font-size: 12px;
      font-style: italic;
    }
  }

  & + .spell {
    margin-top: 8px;
    border-top: 1px dotted $secodary-border__color;
    padding-top: 8px;
  }
}
</style>
