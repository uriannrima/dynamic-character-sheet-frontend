<template>
  <div class="sheet">
    <store-container module="Character"
                     namespaced
                     :map-state="['description', 'classes', 'status']">
      <sheet-header slot-scope="{ state }">
        <flex-container>
          <dcs-avatar :icon-name="iconName"
                      :icon-color="iconColor">
          </dcs-avatar>
          <dcs-details :name="state.description.name"
                       :race="state.description.race"
                       :classes="state.classes">
          </dcs-details>
          <dcs-status :status="state.status">
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
