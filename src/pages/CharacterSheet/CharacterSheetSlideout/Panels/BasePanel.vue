<template>
  <div class="base-panel">
    <slot name="panel-header">
      <div slot="header"
           class="base-panel__header">
        <slot name="panel-icon">
          <i :class="icon"></i>
        </slot>
        <slot name="panel-title">
          <span class="base-panel__title">{{ title }}</span>
        </slot>
        <slot name="panel-modifier">
          <small class="base-panel__sub-title">({{ subTitle }})</small>
        </slot>
      </div>
    </slot>
    <slot>
      <div class="base-panel__body">
        <modifiers-manager v-if="manageable"
                           :base="base"
                           :modifiers="modifiers"
                           :ability-modifier="abilityModifier"
                           @add="$emit('add-modifier', $event)"
                           @remove="$emit('remove-modifier', $event)">
        </modifiers-manager>
        <slot name="panel-snippet">
          <p class="base-panel__snippet">{{snippet}}</p>
        </slot>
        <slot name="panel-body">
          <div class="base-panel__description">
            <v-md :source="description"></v-md>
          </div>
        </slot>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: [String, Number],
    icon: String,
    snippet: String,
    description: String,
    manageable: Boolean,
    base: [String, Number],
    modifiers: Array,
    abilityModifier: [String, Number]
  }
};
</script>

<style lang="scss" scoped>
@import '~public/styles/variables.scss';

.base-panel {
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

  &__title {
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
    margin-left: 5px;
  }

  &__sub-title {
    display: inline-flex;
    vertical-align: middle;
    margin-left: 5px;
    color: $secondary-value__color;
  }

  &__snippet {
    font-style: italic;
  }

  &__description {
    * {
      font-size: 75%;
    }

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
