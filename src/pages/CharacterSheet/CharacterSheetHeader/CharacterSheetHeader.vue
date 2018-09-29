<template>
  <store-container module="Character"
                   namespaced
                   :map-state="mapState">
    <flex-container align="center"
                    slot-scope="{ state : { description, classes, status } }">
      <dcs-avatar></dcs-avatar>
      <dcs-details :name="description.name"
                   :race="description.race"
                   :classes="classes">
      </dcs-details>
      <dcs-status :status="status">
      </dcs-status>
    </flex-container>
  </store-container>
</template>

<script>
import { StoreContainer } from '@/store/components';
import { FlexContainer } from '@/components';
import { Avatar as DcsAvatar } from '@/components/Avatar';
import DcsDetails from './Details.vue';
import DcsStatus from './Status.vue';

export default {
  components: {
    StoreContainer,
    FlexContainer,
    DcsAvatar,
    DcsDetails,
    DcsStatus
  },
  data: () => ({
    mapState: ['description', 'classes', 'status']
  })
};
</script>
