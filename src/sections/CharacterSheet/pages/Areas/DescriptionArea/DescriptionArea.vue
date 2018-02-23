<template>
  <div>
    <logo class="xl-h-up"></logo>
    <description></description>
  </div>
</template>

<script>
import { Logo, Description } from './';

export default {
  components: { Logo, Description }
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

@media screen and (min-width: 1440px) {
  .description-area {
    grid-template-columns: 100%;
    grid-template-areas: "description-component";
  }
}
</style>
