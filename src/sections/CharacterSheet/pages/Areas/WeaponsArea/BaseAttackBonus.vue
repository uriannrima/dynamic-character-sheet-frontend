<template>
  <div class="bab-component">
    <div class="black-box">
      <label>Base Attack Bonus</label>
    </div>
    <input type="text"
           class="common-input bab-input"
           v-model="baseAttackBonus">
  </div>
</template>

<script>
import CharacterMixin from 'store/mixins/character.mixin';

export default {
  mixins: [CharacterMixin],
  computed: {
    baseAttackBonus: {
      set(value) {
        this.character.baseAttackBonus = value.split('/').map(v => Number(v));
      },
      get() {
        return this.character.baseAttackBonus.join('/');
      }
    }
  }
}
</script>

<style>
.bab-component {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(30px, auto);
}

.bab-input {
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .bab-component {
    grid-template-columns: 70% auto;
    grid-column-gap: 10px;
  }
}
</style>
