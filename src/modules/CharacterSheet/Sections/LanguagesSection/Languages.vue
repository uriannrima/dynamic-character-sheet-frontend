<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Languages</span>
    <div class="resume-cards__body--column">
      <span v-if="languages.length <= 0"
            class="list--no-items">No languages</span>
      <div class="languages">
        <div v-for="language in languages"
             :key="language._id"
             class="language">
          <div class="group">
            <div class="group__header">
              <span>{{language.name}}</span>
            </div>
            <div class="group__body">
              <div class="group-item"
                   v-for="(value, key) in languageItems(language)"
                   :key="key">
                <div class="group-item__header language-item__header">
                  <span>{{key}}</span>
                </div>
                <div class="group-item__content">
                  <span>{{value}}</span>
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
import { GroupComponent } from '@shared/components';

export default {
  components: { GroupComponent },
  props: {
    languages: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    languageItems(language) {
      const { description, alphabet, speakers } = language;
      return { description, alphabet, speakers };
    }
  }
};
</script>

<style lang="scss" scoped>
.language-item {
  &__header {
    text-transform: capitalize;
  }
}
</style>
