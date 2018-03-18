<template>
  <div>
    <div class="black-box rounded">
      <div>
        <label>Special Abilities</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
        <open-modal-button :showModal.sync="showModal"></open-modal-button>
      </div>
    </div>
    <div class="special-abilities-container"
         v-show="!minimize">
      <special-ability v-for="(specialAbility, index) in specialAbilities"
                       :key="index"
                       :specialAbility="specialAbility"
                       @onSelected="onSelected"></special-ability>
      <div class="no-content-container"
           v-if="specialAbilities.length == 0">
        <label>No special abilities</label>
      </div>
    </div>
    <special-ability-modal :show.sync="showModal"
                           :referenceList="specialAbilities"
                           :describe.sync="selected"
                           @onAdded="addSpecialAbility($event.model)"
                           @onRemoved="removeSpecialAbility($event.model)"></special-ability-modal>
  </div>
</template>

<script>
import { ModalContainerMixin } from 'shared/modal';
import MinimizableMixin from 'shared/mixins/states/minimizable.mixin';
import { SpecialAbility, SpecialAbilityModal } from './';
import { mapState, mapMutations } from 'store/CharacterModule';

export default {
  components: { SpecialAbility, SpecialAbilityModal },
  mixins: [ModalContainerMixin, MinimizableMixin],
  computed: {
    ...mapState(['specialAbilities'])
  },
  created() {
    // update.mixin requirement.
    this.arrayName = 'specialAbilities';
  },
  methods: {
    ...mapMutations(['addSpecialAbility', 'removeSpecialAbility'])
  }
}
</script>

<style>
.special-abilities-container {
  border: solid 1px black;
}
</style>
