<template>
  <div>
    <div class="black-box rounded">
      <div>
        <label>Spells</label>
        <span class="add-icon glyphicon glyphicon-plus" @click="toggleModal"></span>
        <span class="add-icon glyphicon" :class="{'glyphicon-zoom-out' : !minimize, 'glyphicon-zoom-in' : minimize}" @click="minimize = !minimize"></span>
      </div>
    </div>
    <div class="spells-component" v-show="!minimize">
      <span class="spells-note">Domains/Specialty School</span>
      <input type="text" class="common-input only-bottom" v-model="character.domainSchool">
      <spell-group-component v-for="(spells, spellsGroup, index) in spellsPerGroup" :key="index" :group="spellsGroup" :spells="spells" @onSelected="onSelected"></spell-group-component>
      <div class="no-content-container" v-if="character.spells.length == 0">
        <label>No spells</label>
      </div>
    </div>
    <spell-modal :show.sync="showModal" :referenceList="character.spells" :describe.sync="selected" @onAdded="addToCharacter($event.model)" @onRemoved="removeFromCharacter($event.model)" @onUpdated="updateOnCharacter($event.model)"></spell-modal>
  </div>
</template>

<script>
import { CharacterUpdateMixin, ModalContainerMixin } from 'Shared/modal';
import CharacterMixin from 'Store/character.mixin';
import SpellGroupComponent from './spells-group.component';
import SpellModal from './spell.modal';

export default {
  mixins: [CharacterUpdateMixin, ModalContainerMixin, CharacterMixin],
  components: { SpellGroupComponent, SpellModal },
  created() {
    this.arrayName = 'spells';
  },
  data() {
    return {
      minimize: false
    };
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
