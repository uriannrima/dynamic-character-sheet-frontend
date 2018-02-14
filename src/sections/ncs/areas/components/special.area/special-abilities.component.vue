<template>
  <div>
    <div class="black-box">
      <div>
        <label>Special Abilities</label>
        <span class="add-icon glyphicon glyphicon-plus" @click="toggleModal"></span>
      </div>
    </div>
    <div class="special-abilities-container">
    <special-ability-component v-for="(specialAbility, index) in character.specialAbilities" :key="index" :specialAbility="specialAbility" @onSelected="onSelected"></special-ability-component>
      <div class="no-content-container" v-if="character.specialAbilities.length == 0">
        <label>No special abilities</label>
      </div>
    </div>
    <special-ability-modal :show.sync="showModal" :referenceList="character.specialAbilities" :describe.sync="selected" @onAdded="addToCharacter($event.model)" @onRemoved="removeFromCharacter($event.model)" @onUpdated="updateOnCharacter($event.model)"></special-ability-modal>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import { CharacterUpdateMixin, ModalContainerMixin } from 'Shared/modal';
import SpecialAbilityComponent from './special-ability.component';
import SpecialAbilityModal from './special-ability.modal';

export default {
  mixins: [CharacterMixin, CharacterUpdateMixin, ModalContainerMixin],
  components: { SpecialAbilityComponent, SpecialAbilityModal },
  created() {
    // character.update.mixin requirement.
    this.arrayName = 'specialAbilities';
  },
  data() {
    return {
      showModal: false,
      selected: null
    }
  }
}
</script>

<style>
.special-abilities-container {
  border: solid 1px black;
}
</style>
