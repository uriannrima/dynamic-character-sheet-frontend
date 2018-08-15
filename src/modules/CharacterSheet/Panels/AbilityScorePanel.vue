<template>
  <panel class="ability-score-panel">
    <div slot="header"
         class="ability-score-panel__header">
      <i :class="icon"></i>
      <span class="ability-score__title">{{ abilityScore.name }} {{ abilityScore.total }}</span>
      <small class="ability-score__modifier">({{ abilityScore.modifier | signed }})</small>
    </div>
    <div class="ability-score-panel__body">
      <modifiers-manager :base="abilityScore.base"
                         :modifiers="abilityScore.modifiers"
                         @add="addModifier"
                         @remove="removeModifier">
      </modifiers-manager>
      <p>{{abilityScore.snippet}}</p>
      <div class="ability-score__full-description">
        <v-md :source="abilityScore.description"></v-md>
      </div>
    </div>
  </panel>
</template>

<script>
import Panel from '@shared/components/PanelComponent';
import { ModifiersManager } from '../ModifiersManager';

export default {
  components: { Panel, ModifiersManager },
  props: {
    abilityScore: {
      type: Object,
      required: true
    }
  },
  data: () => ({}),
  computed: {
    icon() {
      return `icon-${this.abilityScore.name}`;
    }
  },
  methods: {
    addModifier(modifier) {
      this.abilityScore.modifiers.push(modifier);
    },
    removeModifier($index) {
      this.abilityScore.modifiers.splice($index, 1);
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/variables.scss';

.ability-score-panel {
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: solid 1px $disable_color;

    i {
      font-size: 25px;
    }
  }

  &__body {
    p,
    li {
      font-size: 13px;
    }
  }
}

.ability-score {
  &__title {
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
    margin-left: 5px;
  }

  &__modifier {
    display: inline-flex;
    vertical-align: middle;
    margin-left: 5px;
    color: $secondary-value__color;
  }

  &__full-description {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 0.2em;
    }

    p {
      margin: 0 0 15px;
    }

    ul {
      padding-left: 1.5em;
    }
  }
}
</style>
