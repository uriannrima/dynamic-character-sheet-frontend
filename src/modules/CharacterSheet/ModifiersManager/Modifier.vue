<template>
  <div class="modifier">
    <div class="modifier__name">
      {{modifier.name}}
      <small v-if="modifier.temporary"
             @click="remove">Remove</small>
    </div>
    <div v-if="!colorize"
         class="modifier__value">{{modifier.value}}</div>
    <div v-else
         class="modifier__value"
         :class="{'penalty' : modifier.value < 0, 'bonus': modifier.value > 0 }">{{modifier.value | signed}}</div>
  </div>
</template>

<script>
export default {
  props: {
    colorize: {
      type: Boolean,
      default: false
    },
    modifier: {
      type: Object,
      required: true
    }
  },
  methods: {
    remove() {
      this.$emit('remove');
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/variables.scss';

.modifiers-manager {
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
