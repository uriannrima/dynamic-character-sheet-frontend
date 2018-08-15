<template>
  <panel class="saving-throw-panel">
    <div slot="header"
         class="saving-throw-panel__header">
      <span class="saving-throw__title">{{ savingThrow.name }}</span>
      <small class="saving-throw__modifier">({{ savingThrow.total + keyAbilityScore.modifier | signed }})</small>
    </div>
    <div class="saving-throw-panel__body">
      <modifiers-manager :base="savingThrow.base"
                         :ability-modifier="keyAbilityScore.modifier"
                         :modifiers="savingThrow.modifiers"
                         @add="addModifier"
                         @remove="removeModifier">
      </modifiers-manager>
      <p>{{savingThrow.snippet}}</p>
    </div>
  </panel>
</template>

<script>
import Panel from '@shared/components/PanelComponent';
import { ModifiersManager } from '../ModifiersManager';

export default {
  components: { Panel, ModifiersManager },
  props: {
    savingThrow: {
      type: Object,
      required: true
    },
    keyAbilityScore: {
      type: Object,
      required: true
    }
  },
  data: () => ({}),
  methods: {
    addModifier(modifier) {
      this.savingThrow.modifiers.push(modifier);
    },
    removeModifier($index) {
      this.savingThrow.modifiers.splice($index, 1);
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/variables.scss';

.saving-throw-panel {
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
      white-space: pre-line;
    }
  }
}

.saving-throw {
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
