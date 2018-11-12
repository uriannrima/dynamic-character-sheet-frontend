<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Feats</span>
    <div class="resume-cards__body--column">
      <span v-if="feats.length <= 0"
            class="list--no-items">No feats</span>
      <group-component v-else
                       :list="feats"
                       :group-by-fn="feat => feat.type">
        <template slot-scope="{ groupKey, groupList }">
          <group-component :list="groupList"
                           :group-by-fn="feat => feat.class">
          </group-component>
        </template>
      </group-component>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feats: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    featsGroupedByType() {
      return this.feats.orderBy(feat => feat.name).groupBy(feat => feat.type);
    }
  },
  methods: {
    groupedBy(array, fn) {
      return array.groupBy(fn);
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';
</style>
