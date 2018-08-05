<template>
  <div class="groups">
    <div class="group"
         v-for="(list, key) in groupedBy"
         :key="key">
      <div class="group__header"
           v-show="key">
        <span>{{key}}</span>
      </div>
      <div class="group__body">
        <slot :groupKey="key"
              :groupList="list">
          <div class="group-item"
               v-for="item in list"
               :key="item._id">
            <div class="group-item__header">
              <span>{{item.name}}</span>
            </div>
            <div class="group-item__content">
              <span>{{item.snippet}}</span>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    groupByFn: {
      type: Function,
      required: true
    }
  },
  computed: {
    groupedBy() {
      return this.list.groupBy(this.groupByFn);
    }
  }
};
</script>

<style>
</style>
