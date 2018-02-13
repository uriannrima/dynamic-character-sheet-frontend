<template>
  <div>
    <div class="black-box">
      <div>
        <label>Special Abilities</label>
        <span class="add-icon glyphicon glyphicon-plus"></span>
      </div>
    </div>
    <div class="special-abilities-container">
      <special-ability-component v-for="(specialAbility, index) in character.specialAbilities" :key="index" :specialAbility="specialAbility"></special-ability-component>
      <div class="no-content-container" v-if="character.specialAbilities.length == 0">
        <label>No special abilities</label>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import CharacterUpdateMixin from 'Shared/modal/character.update.mixin';
import SpecialAbilityComponent from './special-ability.component';
import SpecialAbilityModal from './special-ability.modal';

export default {
  mixins: [CharacterMixin, CharacterUpdateMixin],
  components: { SpecialAbilityComponent, SpecialAbilityModal },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style>

</style>
