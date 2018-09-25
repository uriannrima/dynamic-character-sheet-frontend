<template>
  <header class="sheet__header">
    <dcs-details :icon-name="iconName"
                 :icon-color="iconColor"
                 :name="description.name"
                 :race="description.race"
                 :classes="classes">
    </dcs-details>
    <status :status="status">
    </status>
  </header>
</template>

<script>
import { Details } from './Details';
import Status from './Status';

import { mapState } from '@/pages/CharacterSheet/Store/Character';

export default {
  components: { 'dcs-details': Details, Status },
  props: {
    iconName: {
      type: String,
      default: 'ra-ball'
    },
    iconColor: {
      type: String,
      default: 'purple'
    }
  },
  computed: {
    ...mapState(['description', 'classes', 'status'])
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.sheet {
  &__header {
    background-color: #252121;
    position: fixed;
    height: 72px;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 2px red;
  }
}
</style>
