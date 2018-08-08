<template>
  <div :class="{'resume-card--thinner' : thinner, 'resume-card' : !thinner}">
    <span class="resume-card__header">
      <slot name="header"></slot>
    </span>
    <div class="resume-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thinner: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scopped lang="scss">
@import '~public/styles/components.scss';

.resume-cards {
  .resume-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    text-align: center;
    border: solid 1px black;
    margin: 10px;
    border-radius: 5px;

    &--thinner {
      @extend .resume-card;
      flex: unset;
      width: 25%;
    }

    &__header {
      @extend .text-xs;
      font-weight: bold;
      color: white;

      border: solid 1px black;
      border-radius: 5px;
      margin-top: -8px;
      background-color: black;
      padding: 0 5px;

      text-transform: uppercase;
    }

    &__body {
      display: flex;
      flex-direction: column;
      justify-content: center;

      span {
        @extend .text-4xl;
        font-weight: bold;
        position: relative;
      }

      i {
        position: absolute;
        right: 110%;
        font-style: normal;
        color: gray;
      }

      small {
        border: solid 1px black;
        border-radius: 5px;
        margin-bottom: -8px;
        background-color: white;
        padding: 0 5px;
      }
    }
  }
}
</style>
