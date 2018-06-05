<template>
  <div>
    <div class="black-box rounded">
      <div>
        <label>Spells</label>
        <open-modal-button :showModal.sync="showModal"></open-modal-button>
      </div>
    </div>
    <div class="spells-component">
      <span class="spells-note">Domains/Specialty School</span>
      <input type="text"
             class="common-input only-bottom"
             :value="domainSchool"
             @change="updateDomainSchool($event.target.value)">
      <spells-group v-for="(spells, spellsGroup, index) in spellsPerGroup"
                    :key="index"
                    :group="spellsGroup"
                    :spells="spells"
                    @onSelected="onSelected"></spells-group>
      <div class="no-content-container"
           v-if="spells.length == 0">
        <label>No spells</label>
      </div>
    </div>
    <spell-modal :show.sync="showModal"
                 :referenceList="spells"
                 :describe.sync="selected"
                 @onAdded="addSpell($event.model)"
                 @onRemoved="removeSpell($event.model)"></spell-modal>
  </div>
</template>

<script>
import { ModalContainerMixin } from 'shared/modal'
import { SpellsGroup, SpellModal } from '../Components'
import { mapState, mapMutations } from '../Store'

export default {
  components: { SpellsGroup, SpellModal },
  mixins: [ModalContainerMixin],
  computed: {
    ...mapState(['spells', 'domainSchool']),
    spellsPerGroup: function () {
      return this.spells.groupBy(s => s.level)
    }
  },
  created () {
    this.arrayName = 'spells'
  },
  methods: {
    ...mapMutations(['addSpell', 'removeSpell', 'updateDomainSchool'])
  }
}
</script>

<style>
.spells-component {
  padding: 0 2px;
}

.spells-component input {
  text-align: center;
}

.spells-note {
  display: block;
  text-align: center;
  text-transform: uppercase;
}
</style>
