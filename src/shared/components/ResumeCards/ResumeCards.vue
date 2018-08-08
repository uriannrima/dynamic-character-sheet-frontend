<template>
  <div class="resume-cards">
    <span class="resume-cards__header">
      {{ listName }}
    </span>
    <div class="resume-cards__body">
      <span v-if="!hasElement"
            class="list--no-items">No {{ listName }}</span>
      <slot v-else
            :list="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listName: {
      type: String,
      required: true
    },
    list: {
      type: [Object, Array],
      required: true
    }
  },
  computed: {
    hasElement() {
      return (
        (Array.isArray(this.list)
          ? this.list.length
          : Object.keys(this.list).length) >= 1
      );
    }
  }
};
</script>

<style scopped lang="scss">
@import '~public/styles/components.scss';

.resume-cards {
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  margin-bottom: 10px;
  border-radius: 10px 10px 0 0;

  &__header {
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    background-color: black;
    color: white;
    border-radius: 10px 10px 0 0;
  }

  &__body {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    &--column {
      @extend .resume-cards__body;
      flex-direction: column;
      flex-wrap: unset;
    }
  }
}

.list--no-items {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
