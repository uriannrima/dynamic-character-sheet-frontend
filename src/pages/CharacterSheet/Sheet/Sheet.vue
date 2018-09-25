<template>
  <div class="sheet">
    <store-container store-name="Character"
                     :mapState="['description', 'classes','status']">
      <sheet-header slot-scope="{ description, classes, status }">
        <flex-container>
          <dcs-avatar :icon-name="iconName"
                      :icon-color="iconColor">
          </dcs-avatar>
          <dcs-details :name="description.name"
                       :race="description.race"
                       :classes="classes">
          </dcs-details>
          <dcs-status :status="status">
          </dcs-status>
        </flex-container>
      </sheet-header>
    </store-container>
    <slot>
    </slot>
  </div>
</template>

<script>
import FlexContainer from '@/components/FlexContainer';
import StoreContainer from '@/store/components/StoreContainer.vue';

import {
  SheetHeader,
  Avatar as DcsAvatar,
  Details as DcsDetails,
  Status as DcsStatus
} from './SheetHeader';

export default {
  components: {
    SheetHeader,
    FlexContainer,
    DcsAvatar,
    DcsDetails,
    DcsStatus,
    StoreContainer
  },
  props: {
    iconName: {
      type: String,
      default: 'ra-ball'
    },
    iconColor: {
      type: String,
      default: 'purple'
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.sheet {
  display: flex;
  flex-direction: column;
  padding-top: 72px;
  box-shadow: rgb(136, 136, 136) 0 0px 10px;
}
</style>
