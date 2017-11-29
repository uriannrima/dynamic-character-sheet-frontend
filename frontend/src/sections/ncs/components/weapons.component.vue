<template>
  <div class="weapons-component">
    <!-- weapon-component v-for="n in 5" :key="n" / -->
    <div v-for="n in 5" :key="n" class="weapon-wrapper">
      <div class="weapon-component">
        <div class="primary-weapon-information">
          <div>
            <label>Weapon</label>
          </div>
          <div>
            <label>Attack Bonus</label>
          </div>
          <div>
            <label>Damage</label>
          </div>
          <div>
            <label>Critical</label>
          </div>
          <input type="text" class="full-width-input">
          <input type="text" class="full-width-input">
          <input type="text" class="full-width-input">
          <input type="text" class="full-width-input">
        </div>
        <div class="secondary-weapon-information">
          <div>
            <label>Range</label>
          </div>
          <div>
            <label>Type</label>
          </div>
          <div>
            <label>Notes</label>
          </div>
          <input type="text" class="full-width-input">
          <input type="text" class="full-width-input">
          <input type="text" class="full-width-input">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeaponComponent from './weapon.component';

export default {
  components: {
    WeaponComponent
  }
}
</script>

<style>
.weapons-component {
  display: grid;
  grid-template-rows: repeat(5, 20%);
}

.weapon-wrapper {
  display: grid;
  grid-template-rows: auto 20px;
  margin-bottom: 1px;
  height: 100%;
}

.weapon-component {
  display: grid;
  grid-template-rows: repeat(2, 50%);
  text-align: center;
}

.weapon-component label {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 70%;
}

.ammunition-wrapper {
  display: grid;
  grid-template-columns: 30% auto;
  justify-items: center;
  align-items: start;
}

.ammunition-wrapper label {
  font-size: 50%;
}

.weapon-name-header {
  grid-column-end: 3 span;
}

.primary-weapon-information {
  display: grid;
  grid-template-columns: 37% 30% 1fr 1fr;
}

.secondary-weapon-information {
  display: grid;
  grid-template-columns: 15% 15% auto;
}

.primary-weapon-information > div,
.secondary-weapon-information > div {
  background-color: black;
  color: white;
}
</style>
