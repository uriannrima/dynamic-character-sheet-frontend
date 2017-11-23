<template>
    <div class="armor-component">
        <div class="health-container">
            <div class="grid health-grid health-header">
                <label>&nbsp</label>
                <label>Total</label>
                <label>Wounds/Current HP</label>
                <label>Nonlethal<br>Damage</label>
                <label class="speed-label">Speed</label>
            </div>
            <div class="grid health-grid health-body">
                <div class="black-box">
                    <label>HP</label>
                    <label>Health Points</label>
                </div>
                <input type="number" class="armor-container-input">
                <input type="number" class="armor-container-input">
                <input type="number" class="armor-container-input">
                <input type="number" class="armor-container-input">
            </div>
        </div>
        <div class="first-armor-container">
            <div class="grid armor-grid">
                <div class="black-box">
                    <label>AC</label>
                    <label>Armor Class</label>
                </div>
                <input type="number" class="armor-container-input">
                <span class="base-armor-label">= 10 +</span>
                <input type="number" class="armor-container-input">
                <input type="number" class="armor-container-input">
                <input type="number" class="armor-container-input">
                <input type="number" class="armor-container-input">
                <input type="number" class="armor-container-input">
                <input type="number" class="armor-container-input">
                <input type="number" class="armor-container-input">
                <input type="text" class="armor-container-input">
            </div>
            <div class="grid armor-grid health-header">
                <label>&nbsp</label>
                <label>Total</label>
                <label>&nbsp</label>
                <label>Armor<br>Bonus</label>
                <label>Shield<br>Bonus</label>
                <label>Dex<br>Modifier</label>
                <label>Size<br>Modifier</label>
                <label>Natural<br>Armor</label>
                <label>Deflection<br>Modifier</label>
                <label>Misc<br>Modifier</label>
                <label>Damage<br>Reduction</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.armor-component {
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.health-container {
  display: grid;
  grid-template-rows: 36% 1fr;
  align-items: center;
  padding-left: 5px;
}

.first-armor-container {
  display: grid;
  grid-template-rows: 1fr 36%;
  align-items: center;
  padding-left: 5px;
}

.grid {
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
}

.health-grid {
  grid-template-columns: 10.5% 7% 42% 12% auto;
}

.armor-grid {
  grid-template-columns: 10.5% 7% repeat(8, 1fr) 15%;
}

.health-header label {
  font-size: 50%;
  line-height: 8px;
  text-transform: uppercase;
  text-align: center;
}

.speed-label {
  font-size: 85% !important;
  font-weight: bold;
}

.base-armor-label {
    font-weight: bold;
}

.armor-container-input {
  width: 90%;
}
</style>
