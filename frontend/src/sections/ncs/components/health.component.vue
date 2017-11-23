<template>
    <div class="health-component">
        <div class="grid health-grid health-armor-header health-header">
            <label>&nbsp</label>
            <label class="total-label">Total</label>
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
            <input type="text" class="last-input speed-input">
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
  grid-template-rows: 40% 1fr;
  align-items: center;
}

.health-grid {
  grid-template-columns: 10.5% 7% 42% 12% auto;
}

.speed-label {
  font-size: 85% !important;
  font-weight: bold;
}

.speed-input {
    text-align: center;
}

.health-header {
  align-items: end;
}
</style>
