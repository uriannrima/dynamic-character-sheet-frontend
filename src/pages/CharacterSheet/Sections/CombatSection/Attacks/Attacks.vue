<template>
  <resume-cards :list="attacks"
                listName="attacks">
    <template slot-scope="{ list: attacks }">
      <attack v-for="attack in attacks"
              :key="attack._id"
              :attack="savingThrow"
              :abilityScores="abilityScores">
      </attack>
    </template>
  </resume-cards>
</template>

<script>
import Attack from './Attack';

export default {
  components: { Attack },
  props: {
    attacks: {
      type: Array,
      default: () => []
    },
    abilityScores: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scopped lang="scss">
@import '~public/styles/components.scss';

.attacks {
  &__header {
    display: flex;

    > span {
      @extend .text-xs;
      font-weight: bold;
      text-transform: uppercase;
    }

    &__icon {
      width: $attack__icon--width;
    }
    &__name {
      width: $attack__name--width;
    }
    &__range {
      width: $attack__range--width;
    }
    &__hit {
      width: $attack__hit--width;
    }
    &__damage {
      width: $attack__damage--width;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
}
</style>
