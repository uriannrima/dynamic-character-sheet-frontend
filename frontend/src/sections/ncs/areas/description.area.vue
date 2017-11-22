<template>
  <div class="description-area">
    <description-component/>
    <logo-component/>
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
}

@media screen and (max-width: 768px) {
  .description-area {
    grid-template-columns: 100%;
    grid-template-areas: "logo-component" "description-component";
  }
}
</style>
