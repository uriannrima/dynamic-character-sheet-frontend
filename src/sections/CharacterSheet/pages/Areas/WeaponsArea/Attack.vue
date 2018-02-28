<template>
  <div class="attack-component">
    <div>
      <div class="new-black-box rounded double-height">
        <label>Attack</label>
      </div>
      <input type="text" class="common-input" v-model="attack.name">
    </div>
    <div>
      <div>
        <div class="new-black-box">
          <label>Attack Bonus</label>
        </div>
        <input type="text" class="common-input" v-model="attack.attackBonus">
      </div>
      <div>
        <div class="new-black-box">
          <label>Damage</label>
        </div>
        <input type="text" class="common-input" v-model="attack.damage">
      </div>
      <div>
        <div class="new-black-box">
          <label>Critical</label>
        </div>
        <input type="text" class="common-input" v-model="attack.critical">
      </div>
    </div>
    <div>
      <div>
        <div class="new-black-box">
          <label>Range</label>
        </div>
        <input type="text" class="common-input" v-model="attack.range">
      </div>
      <div>
        <div class="new-black-box">
          <label>Type</label>
        </div>
        <input type="text" class="common-input" v-model="attack.type">
      </div>
    </div>
    <div>
      <div class="new-black-box">
        <label>Notes</label>
      </div>
      <input type="text" class="common-input" v-model="attack.notes">
    </div>
    <div v-if="attack.ammunition">
      <label>Ammunition</label>
      <input type="text" class="only-bottom" v-model="attack.ammunition.name">
    </div>
  </div>
</template>

<script>
export default {
  props: ['attack']
}
</script>

<style scoped>
.attack-component input {
  text-align: center;
}

.attack-component > div:nth-child(2) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.attack-component > div:nth-child(3) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.attack-component > div:nth-child(5) > label {
  font-size: 90%;
  display: block;
  text-transform: uppercase;
  font-weight: bolder;
  text-align: center;
  align-self: flex-end;
}

.attack-component > div:nth-child(5) > input {
  width: 100%;
}

@media screen and (min-width: 1024px) {
  .new-black-box > label {
    font-size: 95%;
  }

  .double-height {
    height: 30px;
  }

  .attack-component {
    display: grid;
    grid-template-columns: 40% 60%;
  }

  .attack-component > div:nth-child(2) {
    align-items: flex-end;
  }

  .attack-component > div:nth-child(5) {
    padding: 0 5px;
    grid-column: span 2;
    display: grid;
    grid-template-columns: 15% 1fr;
  }
}
</style>
