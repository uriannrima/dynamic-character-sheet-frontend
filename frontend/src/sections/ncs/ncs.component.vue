<template>
  <div class="main-container">
    <front-page/>
    <cover-page/>
  </div>
</template>

<script>
import * as Pages from './pages';

export default {
  components: Pages
}
</script>

<style>
@page {
  size: A4;
  margin: 0;
}

.main-container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% auto;
}

.page {
  height: 297mm;
}

/** HD Resolution */
@media screen and (min-width: 1440px) {
  .main-container {
    width: 420mm;
  }
}

/** Common Desktop Resolution */
@media screen and (max-width: 1439px) {
  .main-container {
    grid-template-columns: 100%;
  }
}

/** Print Resolution */
@media screen and (min-width: 794px) and (max-width: 1439px) {
  .main-container {
    width: 210mm;
  }
}

/** Tablet Resolution */
@media screen and (max-width: 793px) {
  .main-container {
    width: 768px;
  }
}

/** Mobile Resolution */
@media screen and (max-width: 767px) {
  .main-container {
    width: 568px;
  }
}

/** Small Mobile Resolution */
@media screen and (max-width: 567px) {
  .main-container {
    width: 360px;
  }
}

@media print {
  .main-container {
    width: 210mm;
    grid-template-columns: 100%;
  }
}
</style>
