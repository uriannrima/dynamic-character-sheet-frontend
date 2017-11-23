<template>
    <div class="initiative-component">
        <div class="black-box initiative-box">
            <label>Initiative</label>
            <label>Modifier</label>
        </div>
        <div class="initiative-grid">
            <input type="number" class="common-input">
            <input type="number" class="common-input">
            <input type="number" class="common-input">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.initiative-box {
  height: 60%;
}

.initiative-component {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
}

.initiative-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}
</style>
