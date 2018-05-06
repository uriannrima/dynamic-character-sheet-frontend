<template>
  <div>
    <logo class="h-xl-up h-md-down"></logo>
    <description v-bind="description"
                 :classes="getClasses"
                 :sizeName="getSize"
                 @onCharacterSave="saveCharacter($event)"
                 @onDescriptionUpdate="updateDescription($event)"
                 @onClassesUpdate="updateClasses($event)"
                 @onSizeUpdate="updateSize($event)"></description>
  </div>
</template>

<script>
import { Logo, Description } from '../Components';
import { mapState, mapGetters, mapActions } from '../Store';

export default {
  components: { Logo, Description },
  computed: {
    ...mapState(['_id', 'description']),
    ...mapGetters(['getClasses', 'getSize'])
  },
  methods: {
    ...mapActions(['saveCharacter', 'updateDescription', 'updateClasses', 'updateSize'])
  }
}
</script>

<style>
.description-area {
  grid-area: description-area;
  display: grid;
  grid-template-columns: 66% auto;
  grid-template-areas: "description-component logo-component";
}

@media screen and (max-width: 768px) {
  .description-area {
    grid-template-columns: 100%;
    grid-template-areas: "logo-component" "description-component";
  }
}
</style>
