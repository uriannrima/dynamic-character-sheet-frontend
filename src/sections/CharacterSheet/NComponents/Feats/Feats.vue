<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Feats</span>
    <div class="resume-cards__body--column">
      <span v-if="feats.length <= 0"
            class="list--no-items">No feats</span>
      <div v-else
           class="feats__groups">
        <div v-for="(feats, key) in featsGroupedByType"
             :key="key"
             class="feats__group">
          <div class="feats__group__header"
               v-show="key">
            <span>{{key}}</span>
          </div>
          <div class="feats__group__body">
            <div class="feats__group"
                 v-for="(feats, key) in featsGroupedBy(feats, feat => feat.class)"
                 :key="key">
              <div class="feats__group__header"
                   v-show="key">
                <span>{{key}}</span>
              </div>
              <div class="feats__group__body">
                <div v-for="feat in feats"
                     :key="feat._id"
                     class="feat">
                  <div class="feat__name">
                    <span>{{feat.name}}</span>
                    <small v-show="feat.page"> ({{feat.page}}) </small>
                  </div>
                  <div class="feat__quick-description">
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

.feats__group {
  &__header {
    border-bottom: solid 1px $secodary-border__color;
    padding: 5px 0 0 5px;

    span {
      font-size: 13px;
      color: $spells__group__header--color;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  &__body {
    padding: 5px;
  }
}

.feat {
  margin-bottom: 10px;

  &__name {
    font-weight: bold;
    font-size: 13px;

    small {
      white-space: nowrap;
      font-style: italic;
      color: $secondary-value__color;
    }
  }

  &__quick-description {
    font-size: 12px;
  }
}
</style>
