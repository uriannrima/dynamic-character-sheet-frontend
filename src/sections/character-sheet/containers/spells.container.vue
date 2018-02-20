<script>
import SpellListComponent from '../components/spell-list.component';
import SpellModal from '../modals/spell.modal.component';

export default {
  props: ['character', 'addEnabled'],
  components: { SpellModal, SpellListComponent },
  data: function() {
    return {
      showModal: false,
      selected: null
    }
  },
  methods: {
    openSpellDescription: function(spell) {
      this.selected = spell;
      this.showModal = true;
    }
  },
  computed: {
    spellsPerLevel: function() {
      return this.character.spells.groupBy(s => s.level);
    }
  }
}
</script>
<template>
    <div>
        <div class="spells-container">
            <div class="spells-header black-box">
                <span class="health-points-abbreviation">Spells</span>
                <span class="add-spell-icon glyphicon glyphicon-plus" v-if="addEnabled" @click="showModal = true"></span>
            </div>
            <span class="spells-note">Domains/Specialty School</span>
            <input type="text" class="domain-specialty-school" v-model="character.domainSchool">
            <div class="spells-area">
                <spell-list-component v-for="(spells, spellsLevel, index) in spellsPerLevel" :key="index" :level="spellsLevel" :spells="spells" @onSpellSelected="openSpellDescription">
                </spell-list-component>
            </div>
        </div>
        <spell-modal v-if="addEnabled" :show.sync="showModal" :describe.sync="selected" :reference-list="character.spells"
            @onAdded="$emit('onSpellAdded', $event)" @onRemoved="$emit('onSpellRemoved', $event)"></spell-modal>
    </div>
</template>