<template>
  <panel class="ability-score-panel">
    <div slot="header"
         class="ability-score-panel__header">
      <i :class="icon"></i>
      <span class="ability-score__title">{{ abilityScore.name }} {{ abilityScore.total }}</span>
      <small class="ability-score__modifier">({{ abilityScore.modifier | signed }})</small>
    </div>
    <div class="ability-score-panel__body">
      <div class="ability-score-manager">
        <div class="modifier">
          <div class="modifier__name">Base</div>
          <div class="modifier__value">{{ abilityScore.base }}</div>
        </div>
        <div class="modifier"
             v-for="(modifier, $index) in abilityScore.modifiers"
             :key="$index">
          <div class="modifier__name">
            {{modifier.name}}
            <small v-if="modifier.temporary"
                   @click="removeModifier($index)">Remove</small>
          </div>
          <div class="modifier__value"
               :class="{'penalty' : modifier.value < 0, 'bonus': modifier.value > 0 }">{{modifier.value | signed}}</div>
        </div>
        <div class="modifier">
          <div class="modifier__name">
            <input class="modifier-input"
                   type="text"
                   v-model="addedModifier.name"
                   @keyup.enter="addModifier"
                   placeholder="Temporary modifier">
          </div>
          <div class="modifier__value">
            <input class="modifier-input"
                   type="number"
                   v-model.number="addedModifier.value"
                   @keyup.enter="addModifier">
          </div>
        </div>
      </div>
      <p>{{abilityScore.snippet}}</p>
      <div class="ability-score__full-description">
        <v-md :source="abilityScore.description"></v-md>
      </div>
    </div>
  </panel>
</template>

<script>
import Panel from '@shared/components/PanelComponent';

export default {
  components: { Panel },
  props: {
    abilityScore: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    addedModifier: {
      name: '',
      value: 0,
      temporary: true
    }
  }),
  computed: {
    icon() {
      return `icon-${this.abilityScore.name}`;
    }
  },
  methods: {
    addModifier() {
      if (this.addedModifier.name !== '' && this.addedModifier.value !== 0) {
        this.abilityScore.modifiers.push(this.addedModifier);
        this.addedModifier = {
          name: '',
          value: 0,
          temporary: true
        };
      }
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

.ability-score-manager {
  display: table;
  width: 100%;
  font-size: 14px;

  .modifier {
    display: table-row;

    &__name {
      display: table-cell;
      padding: 5px 10px;
      border: 1px solid #edeae8;

      small {
        font-style: italic;
        font-size: 10px;
      }

      .modifier-input {
        padding-left: 5px;
        padding-right: 5px;
      }
    }

    &__value {
      width: 25%;
      display: table-cell;
      text-align: center;
      border-bottom: 1px solid #edeae8;
      background-color: #faf8f7;
      font-weight: bolder;
      padding: 5px 10px;

      .modifier-input {
        text-align: center;
      }
    }

    .modifier-input {
      width: 100%;
      background-color: #fff;
      background: #fff none;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
}

.penalty {
  color: $failure_color;
}

.bonus {
  color: $success_color;
}
</style>
