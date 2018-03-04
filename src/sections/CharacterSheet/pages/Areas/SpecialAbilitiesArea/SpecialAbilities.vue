<template>
  <div>
    <div class="black-box rounded">
      <div>
        <label>Special Abilities</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
        <open-modal-button :showModal.sync="showModal"></open-modal-button>
      </div>
    </div>
    <div class="special-abilities-container" v-show="!minimize">
      <special-ability v-for="(specialAbility, index) in character.specialAbilities"
                       :key="index"
                       :specialAbility="specialAbility"
                       @onSelected="onSelected"></special-ability>
      <div class="no-content-container"
           v-if="character.specialAbilities.length == 0">
        <label>No special abilities</label>
      </div>
    </div>
    <special-ability-modal :show.sync="showModal"
                           :referenceList="character.specialAbilities"
                           :describe.sync="selected"
                           @onAdded="addToCharacter($event.model)"
                           @onRemoved="removeFromCharacter($event.model)"
                           @onUpdated="updateOnCharacter($event.model)"></special-ability-modal>
  </div>
</template>

<script>
import CharacterMixin from '@Store/mixins/character.mixin';
import { CharacterUpdateMixin, ModalContainerMixin } from '@Shared/modal';
import MinimizableMixin from '@Shared/mixins/states/minimizable.mixin';
import { SpecialAbility, SpecialAbilityModal } from './';

export default {
  mixins: [CharacterMixin, CharacterUpdateMixin, ModalContainerMixin, MinimizableMixin],
  components: { SpecialAbility, SpecialAbilityModal },
  created() {
    // character.update.mixin requirement.
    this.arrayName = 'specialAbilities';
  }
}
</script>

<style>
.special-abilities-container {
  border: solid 1px black;
}
</style>
