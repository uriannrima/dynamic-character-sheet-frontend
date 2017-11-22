<template>
  <div>
    <description-component/>
    <logo-component class="xl-h-up" />
  </div>
</template>

<script>
import { DescriptionComponent, LogoComponent } from '../components';
export default {
  components: { DescriptionComponent, LogoComponent }
}
</script>

<style>
.description-area {
  grid-area: description-area;
  display: grid;
  grid-template-columns: 66% auto;
  grid-template-areas: "description-component logo-component";
  background-color: rgb(120, 183, 16);
}

@media screen and (max-width: 768px) {
  .description-area {
    grid-template-columns: 100%;
    grid-template-areas: "logo-component" "description-component";
  }
}

@media screen and (min-width: 1440px) {
  .description-area {
    grid-template-columns: 100%;
    grid-template-areas: "description-component";
  }
}
</style>
