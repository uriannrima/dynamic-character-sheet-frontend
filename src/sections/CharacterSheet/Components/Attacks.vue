<template>
  <div class="attacks-component">
    <div class="black-box rounded h-md-up">
      <div>
        <label>Attacks</label>
        <minimize-button :minimize.sync="minimize"></minimize-button>
      </div>
    </div>
    <attack v-show="!minimize"
            v-for="(attack, index) in attacks"
            :key="index"
            v-bind="attack"
            @onAttackUpdate="onUpdateAttack(index, $event)" />
  </div>
</template>

<script>
import { Attack } from '../Components';
import MinimizableMixin from 'shared/mixins/states/minimizable.mixin';
import { mapState, mapActions } from '../Store';

export default {
  components: { Attack },
  mixins: [MinimizableMixin],
  computed: {
    ...mapState(['attacks'])
  },
  methods: {
    ...mapActions(['updateAttack']),
    onUpdateAttack(index, attack) {
      this.updateAttack({
        index,
        attack
      });
    }
  }
}
</script>

<style>
.attacks-component > div {
  margin-bottom: 15px;
}
</style>
