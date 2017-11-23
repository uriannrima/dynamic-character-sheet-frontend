<template>
    <div class="health-component">
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
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.health-component {
  display: grid;
  grid-template-rows: 36% 1fr;
  align-items: center;
}

.health-grid {
  grid-template-columns: 10.5% 7% 42% 12% auto;
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
</style>
