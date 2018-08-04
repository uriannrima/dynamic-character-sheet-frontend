<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Feats</span>
    <div class="resume-cards__body--column">
      <span v-if="feats.length <= 0"
            class="list--no-items">No feats</span>
      <div v-else
           class="groups">
        <div v-for="(feats, key) in featsGroupedByType"
             :key="key"
             class="group">
          <div class="group__header"
               v-show="key">
            <span>{{key}}</span>
          </div>
          <div class="group__body">
            <div class="group"
                 v-for="(feats, key) in featsGroupedBy(feats, feat => feat.class)"
                 :key="key">
              <div class="group__header"
                   v-show="key">
                <span>{{key}}</span>
              </div>
              <div class="group__body">
                <div v-for="feat in feats"
                     :key="feat._id"
                     class="group-item">
                  <div class="group-item__name">
                    <span>{{feat.name}}</span>
                    <small v-show="feat.page"> ({{feat.page}}) </small>
                  </div>
                  <div class="group-item__quick-description">
                    <span>{{feat.quickDescription}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

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
    featsGroupedBy(feats, fn) {
      return feats.groupBy(fn);
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';
</style>
