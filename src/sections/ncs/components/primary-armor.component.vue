<template>
    <div class="primary-armor-component">
        <div class="black-box ac-bb">
            <label>AC</label>
            <label>Armor Class</label>
        </div>
        <input type="number" class="common-input ac-bb" readonly :value="getTotalArmor">
        <span class="base-armor-label">= 10 +</span>
        <input type="number" class="common-input" v-model.number="character.armorClass.armorBonus">
        <input type="number" class="common-input" v-model.number="character.armorClass.shieldBonus">
        <input type="number" class="common-input" readonly :value="getAbility.getTempModifier()">
        <input type="number" class="common-input" readonly :value="character.size.modifier">
        <input type="number" class="common-input" v-model.number="character.armorClass.naturalArmor">
        <input type="number" class="common-input" v-model.number="character.armorClass.deflectionModifier">
        <input type="number" class="common-input" v-model.number="character.armorClass.miscModifier">
        <label>&nbsp;</label>
        <label class="h-md-down total-label">Total</label>
        <label class="h-md-down">&nbsp;</label>
        <label>Armor<br>Bonus</label>
        <label>Shield<br>Bonus</label>
        <label>Dex<br>Modifier</label>
        <label>Size<br>Modifier</label>
        <label>Natural<br>Armor</label>
        <label>Deflection<br>Modifier</label>
        <label>Misc<br>Modifier</label>
        <div class="h-lg-up black-box damage-reduction-bb">
            <label>Damage Reduction</label>
        </div>
        <input type="text" class="damage-reduction-bb common-input speed-input" v-model="character.damageReduction">
        <label>Damage<br>Reduction</label>
    </div>
</template>

<script>
  import CharacterStore from 'Store/character.store';

  export default {
    data() {
      return {
        character: CharacterStore.Instance.character
      }
    },
    computed: {
      getTotalArmor() {
        var { armorClass, size } = this.character;
        return armorClass.base +
          armorClass.armorBonus +
          armorClass.shieldBonus +
          this.getAbility.getTempModifier() +
          size.modifier +
          armorClass.naturalArmor +
          armorClass.deflectionModifier +
          armorClass.miscModifier;
      },
      getAbility() {
        return CharacterStore.Instance.character.abilityScores.find(abilityScore => {
          return abilityScore.name === 'dexterity';
        });
      }
    }
  }
</script>

<style>
  .primary-armor-component {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    justify-items: center;
    align-items: center;
    grid-row-gap: 2px;
    grid-column-gap: 2px;
  }

  .primary-armor-component label {
    font-size: 50%;
    text-transform: uppercase;
    text-align: center;
  }

  .ac-bb {
    grid-column-end: 8 span;
  }

  .damage-reduction-bb {
    grid-column-end: 4 span;
  }

  .base-armor-label {
    font-weight: bold;
    font-size: 18px;
  }

  @media screen and (min-width: 1023px) {
    .primary-armor-component {
      grid-template-columns: repeat(11, 1fr);
      grid-row-gap: initial;
      grid-column-gap: initial;
    }

    .ac-bb {
      grid-column-end: 1 span;
    }

    .damage-reduction-bb {
      grid-column-end: 1 span;
      grid-row-start: 1;
      grid-column-start: 11;
    }
  }
</style>
