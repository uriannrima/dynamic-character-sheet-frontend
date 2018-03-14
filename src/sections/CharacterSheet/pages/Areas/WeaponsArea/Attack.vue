<template>
  <div class="attack-component">
    <div>
      <div class="new-black-box rounded double-height">
        <label>Attack</label>
      </div>
      <input type="text"
             class="common-input"
             :value="name"
             @change="$emit('onAttackUpdate', { name : $event.target.value })">
    </div>
    <div>
      <div>
        <div class="new-black-box">
          <label>Attack Bonus</label>
        </div>
        <input type="text"
               class="common-input"
               :value="attackBonus"
             @change="$emit('onAttackUpdate', { attackBonus : $event.target.value })">
      </div>
      <div>
        <div class="new-black-box">
          <label>Damage</label>
        </div>
        <input type="text"
               class="common-input"
               :value="damage"
             @change="$emit('onAttackUpdate', { damage : $event.target.value })">
      </div>
      <div>
        <div class="new-black-box">
          <label>Critical</label>
        </div>
        <input type="text"
               class="common-input"
               :value="critical"
             @change="$emit('onAttackUpdate', { critical : $event.target.value })">
      </div>
    </div>
    <div>
      <div>
        <div class="new-black-box">
          <label>Range</label>
        </div>
        <input type="text"
               class="common-input"
               :value="range"
             @change="$emit('onAttackUpdate', { range : $event.target.value })">
      </div>
      <div>
        <div class="new-black-box">
          <label>Type</label>
        </div>
        <input type="text"
               class="common-input"
               :value="type"
             @change="$emit('onAttackUpdate', { type : $event.target.value })">
      </div>
    </div>
    <div>
      <div class="new-black-box">
        <label>Notes</label>
      </div>
      <input type="text"
             class="common-input"
             :value="notes"
             @change="$emit('onAttackUpdate', { notes : $event.target.value })">
    </div>
    <div v-if="ammunition">
      <label>Ammunition</label>
      <input type="text"
             class="only-bottom"
             :value="ammunition.name">
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'attackBonus',
    'damage',
    'critical',
    'range',
    'type',
    'notes',
    'ammunition'
  ]
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
