<template>
  <div class="main-container">
    <front-page class="page front" />
    <cover-page class="page cover" />
  </div>
</template>

<script>
  import * as Pages from './pages';
  import CharacterStore from 'Store/character.store';

  export default {
    components: Pages,
    data() {
      return {
        character: CharacterStore.Instance.character
      }
    },
    beforeRouteEnter: async function(to, from, next) {
      if (to.params.id) {
        await CharacterStore.loadCharacter(to.params.id);
      }

      next();
    }
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
    grid-template-columns: 100%;
    transition: all 1s;
    padding: 0 15px;
  }

  .page {
    transition: all 5s;
  }

  /** HD Resolution */

  @media screen and (min-width: 1440px) {
    .main-container {
      width: 420mm;
      grid-template-columns: 50% auto;
    }
  }

  /** Common Desktop Resolution */

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    .main-container {
      width: 210mm;
    }
  }

  /** Tablet Resolution */

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .main-container {
      width: 768px;
    }
  }

  /** Mobile Resolution */

  @media screen and (min-width: 568px) and (max-width: 767px) {
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

  /** Global CSS */

  .debug {
    background-color: rgb(255, 0, 255);
  }

  .black-box {
    display: grid;
    text-align: center;
    align-items: center;
    background-color: black;
    color: white;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid white;
  }

  .black-box label {
    text-transform: uppercase;
    font-weight: bolder;
    display: block;
  }

  .black-box label:nth-child(1) {
    font-size: 95%;
  }

  .black-box label:nth-child(2) {
    font-size: 50%;
  }

  .temporary-box {
    text-align: center;
    background-color: lightgray;
  }

  .only-bottom {
    border-width: 0 0 1px 0 !important;
    border-bottom: solid 1px black;
  }

  .descriptor {
    font-weight: bold;
    text-transform: uppercase;
  }

  /** Core CSS */

  html,
  button,
  input,
  select,
  textarea {
    font-family: "Source Sans Pro", sans-serif !important;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
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

  /** Utils */

  /** Hide on Large */

  @media screen and (max-width: 1439px) {
    .h-lg-down {
      display: none !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .h-lg-up {
      display: none !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    .h-lg-only {
      display: none !important;
    }
  }

  /** Hide on Medium */

  @media screen and (max-width: 1023.5px) {
    .h-md-down {
      display: none !important;
    }
  }

  @media only screen and (min-width: 768px) {
    .h-md-up {
      display: none !important;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023.5px) {
    .h-md-only {
      display: none !important;
    }
  }
  
  /** Hide on Small */ 
  @media screen and (max-width: 767px) {
    .h-sm-down {
      display: none !important;
    }
  }

  @media screen and (min-width: 360px) {
    .h-sm-up {
      display: none !important;
    }
  }

  @media screen and (min-width: 360px) and (max-width: 767px) {
    .h-sm-only {
      display: none !important;
    }
  }
</style>
