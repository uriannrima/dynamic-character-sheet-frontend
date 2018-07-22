<template>
  <div class="initiative-area armor-initiative-grid">
    <secondary-armor></secondary-armor>
    <initiative :total-initiative="getTotalInitiative"
                :key-score-name="getInitiativeKeyScore.name"
                :key-score-modifier="getInitiativeKeyScore.tempModifier"
                @updateInitiative="updateInitiative"></initiative>
  </div>
</template>

<script>
import { SecondaryArmor, Initiative } from '../Components'
import { mapState, mapGetters, mapActions } from '../Store'

export default {
  components: { SecondaryArmor, Initiative },
  computed: {
    ...mapGetters(['getTotalInitiative', 'getInitiativeKeyScore'])
  },
  methods: {
    ...mapActions(['updateInitiative'])
  }
}
</script>

<style>
.armor-initiative-grid {
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 2px;
}

@media screen and (min-width: 1024px) {
  .armor-initiative-grid {
    grid-template-rows: 35% auto;
  }
}
</style>
