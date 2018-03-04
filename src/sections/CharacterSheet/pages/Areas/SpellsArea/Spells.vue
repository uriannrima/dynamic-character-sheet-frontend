<template>
  <div>
    <div class="black-box rounded">
      <div>
        <label>Spells</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
        <open-modal-button :showModal.sync="showModal"></open-modal-button>
      </div>
    </div>
    <div class="spells-component"
         v-show="!minimize">
      <span class="spells-note">Domains/Specialty School</span>
      <input type="text"
             class="common-input only-bottom"
             v-model="character.domainSchool">
      <spells-group v-for="(spells, spellsGroup, index) in spellsPerGroup"
                    :key="index"
                    :group="spellsGroup"
                    :spells="spells"
                    @onSelected="onSelected"></spells-group>
      <div class="no-content-container"
           v-if="character.spells.length == 0">
        <label>No spells</label>
      </div>
    </div>
    <spell-modal :show.sync="showModal"
                 :referenceList="character.spells"
                 :describe.sync="selected"
                 @onAdded="addToCharacter($event.model)"
                 @onRemoved="removeFromCharacter($event.model)"
                 @onUpdated="updateOnCharacter($event.model)"></spell-modal>
  </div>
</template>

<script>
import { CharacterUpdateMixin, ModalContainerMixin } from '@Shared/modal';
import CharacterMixin from '@Store/mixins/character.mixin';
import MinimizableMixin from '@Shared/mixins/states/minimizable.mixin';
import { SpellsGroup, SpellModal } from './';

export default {
  mixins: [CharacterUpdateMixin, ModalContainerMixin, CharacterMixin, MinimizableMixin],
  components: { SpellsGroup, SpellModal },
  created() {
    this.arrayName = 'spells';
  },
  computed: {
    spellsPerGroup: function () {
      return this.character.spells.groupBy(s => s.level);
    }
  }
}
</script>

<style>
.spells-component input {
  text-align: center;
}

.spells-note {
  display: block;
  text-align: center;
  text-transform: uppercase;
}
</style>
