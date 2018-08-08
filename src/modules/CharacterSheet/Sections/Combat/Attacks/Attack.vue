<template>
  <div class="attack">
    <span class="attack__icon">
      <i class="icon-high-shot">
      </i>
    </span>
    <div class="attack__name">
      <span>{{attack.name}}</span>
      <small>{{attack.type}}</small>
    </div>
    <div class="attack__range">
      <span>{{attack.range}}</span>
      <small v-show="false">Reach</small>
    </div>
    <span class="attack__hit">{{attack.attackBonus}}</span>
    <div class="attack__damage">
      <div>
        <span>{{attack.damage}}</span>
        <i class="ra"
           :class="getAttackTypeIcon(attack)"></i>
      </div>
      <small v-show="false">{{attack.critical}}</small>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.attacks {
  .attack {
    display: flex;

    &__icon {
      @extend .dcs__icon;
      width: $attack__icon--width;
    }

    &__name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: $attack__name--width;

      > span {
        @extend .text-sm;
      }

      > small {
        @extend .text-xs;
        color: $secondary-value__color;
      }
    }

    &__range {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: $attack__range--width;

      > span {
        @extend .text-sm;
        font-weight: bold;
      }

      > small {
        @extend .text-xs;
        color: $secondary-value__color;
      }
    }

    &__hit {
      @extend .text-base;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: $attack__hit--width;
    }

    &__damage {
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: $attack__damage--width;

      i {
        margin-left: 3px;
      }

      span {
        @extend .text-sm;
      }

      small {
        @extend .text-2sm;
        color: $secondary-value__color;
      }
    }

    + .attack {
      margin-top: 8px;
      border-top: 1px dotted #eaeaea;
      padding-top: 8px;
    }
  }
}
</style>
