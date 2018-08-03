<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Spells</span>
    <div class="resume-cards__body--column">
      <span v-if="spells.length <= 0"
            class="list--no-items">No spells</span>
      <div v-else>
        <div v-for="(spellGroup, key) in spellsGroupedByLevel"
             :key="key"
             class="spells__group">
          <div class="spells__group__header">
            <span>
              <cardinal-component :cardinal="Number(key)"></cardinal-component> Level</span>
            <div class="spells__group__slots"></div>
          </div>
          <div class="spells">
            <div class="spells__header">
              <div class="spells__header__action"
                   v-if="false">
              </div>
              <span class="spells__header__name">Name</span>
              <span class="spells__header__time">Time</span>
              <span class="spells__header__range">Range</span>
              <span class="spells__header__hit">HIT / DC</span>
              <span class="spells__header__effects">Effects</span>
            </div>
            <div class="spells__list">
              <div v-for="spell in spellGroup"
                   :key="spell._id"
                   class="spell">
                <div class="spell__action"
                     v-if="false">
                  <div class="spell__action__cast">
                    <span>Cast</span>
                  </div>
                </div>
                <div class="spell__name">
                  <span> {{spell.name}} </span>
                  <small>{{spell.school}}</small>
                </div>
                <span class="spell__time">{{spell.castingTime.amount}} SA</span>
                <div class="spell__range">
                  <span>{{spell.range[0].type}}</span>
                  <small>{{spell.range[0].distance}}</small>
                </div>
                <div class="spell__hit">
                  <span class="spell__hit__modifier">{{10 + spell.level + abilityScores.intelligence.tempModifier | signed }}</span>
                  <small class="spell__hit__saving-throw">{{spell.savingThrow.keyAbility}}</small>
                  <small class="spell__hit__resolve">{{spell.savingThrow.resolve}}</small>
                </div>
                <div class="spell__effects">
                  <div v-for="(effect, index) in spell.effects"
                       :key="index">
                    <span v-if="effect.damage">{{characterLevel / effect.scale.per}}{{effect.damage}}</span>
                    <span v-else>{{effect}}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spell from './Spell.vue';
import { CardinalComponent } from 'shared/components';

export default {
  components: { CardinalComponent },
  props: {
    characterLevel: {
      type: Number,
      default: 9
    },
    spells: {
      type: Array,
      default: () => []
    },
    abilityScores: {
      type: Object,
      required: true
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
  &__hit {
    width: $spell__hit--width;
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
  &__hit,
  &__effects {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__time,
  &__range,
  &__hit {
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

  &__hit {
    &__saving-throw {
      font-weight: bold;
    }
    &__modifier {
      text-transform: uppercase;
      font-weight: bold;
    }
    &__resolve {
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
