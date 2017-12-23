<template>
  <div class="bab-component">
    <div class="black-box">
      <label>Base Attack Bonus</label>
    </div>
    <input type="text" class="common-input bab-input">
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';

export default {
  mixins: [CharacterMixin]
}
</script>

<style>
.bab-component {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(30px, auto);
}

.bab-input {
  text-align: center;
}
/*
.bab-component {
  display: grid;
  grid-template-columns: 70% 1fr;
  align-items: center;
  justify-items: center;
}

.bab-box {
  align-items: center;
}
*/
</style>
