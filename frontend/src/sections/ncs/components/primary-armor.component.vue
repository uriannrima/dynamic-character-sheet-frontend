<template>
    <div class="primary-armor-component">
        <div class="grid primary-armor-grid">
            <div class="black-box">
                <label>AC</label>
                <label>Armor Class</label>
            </div>
            <input type="number">
            <span class="base-armor-label">= 10 +</span>
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="text" class="last-input damage-reduction-input">
        </div>
        <div class="grid primary-armor-grid health-armor-header armor-header">
            <label>&nbsp</label>
            <label class="total-label">Total</label>
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
</template>

<script>
export default {

}
</script>

<style>
.primary-armor-component {
  display: grid;
  grid-template-rows: 1fr 36%;
  align-items: center;
}

.primary-armor-grid {
  grid-template-columns: 10.5% 7% repeat(8, 1fr) 15%;
}

.base-armor-label {
  font-weight: bold;
}

.armor-header {
  align-items: start;
}

.damage-reduction-input {
    text-align: center;
}
</style>
