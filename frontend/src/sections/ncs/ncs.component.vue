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
  transition: all 1s;
  padding: 0 15px;
}

.page {
  transition: all 5s;
  height: 297mm;
}

/** HD Resolution */
@media screen and (min-width: 1440px) {
  .main-container {
    width: 420mm;
  }
}

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

/** Global CSS */
.black-box {
  text-align: center;
  background-color: black;
  color: white;
  border-top: 1px solid white;
}

.black-box label {
  text-transform: uppercase;
  font-weight: bolder;
  display: block;
}

.black-box label:nth-child(1) {
  font-size: 120%;
}

.black-box label:nth-child(2) {
  font-size: 55%;
  margin-top: -3px;
}

.temporary-box {
  text-align: center;
  background-color: lightgray;
}

/** Core CSS */
html,
button,
input,
select,
textarea {
  font-family: "Source Sans Pro", sans-serif !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0;
  /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  text-align: center;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[readonly] {
  background-color: #ccc;
}

.attention {
  background-color: yellow;
}

textarea {
  resize: none;
}
</style>
