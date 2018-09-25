<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Special Abilities</span>
    <div class="resume-cards__body--column">
      <span v-if="specialAbilities.length <= 0"
            class="list--no-items">No special abilities</span>
      <group-component v-else
                       :list="specialAbilities"
                       :group-by-fn="ability => ability.type">
        <template slot-scope="{ groupKey, groupList }">
          <group-component :list="groupList"
                           :group-by-fn="ability => ability.race">
          </group-component>
        </template>
      </group-component>
    </div>
  </div>
</template>

<script>
import GroupComponent from '@/components/GroupComponent';

export default {
  components: { GroupComponent },
  props: {
    specialAbilities: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    abilitiesGroupedByType() {
      return this.specialAbilities
        .orderBy(ability => ability.name)
        .groupBy(ability => ability.type);
    }
  },
  methods: {
    groupedBy(array, fn) {
      return array.groupBy(fn);
    }
  }
};
</script>

<style>
</style>
