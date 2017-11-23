<template>
    <div class="secondary-armor-component">
        <div class="touch-armor-class">
            <div class="black-box secondary-armor-box">
                <label>Touch</label>
                <label>Armor Class</label>
            </div>
            <input type="number" class="common-input">
        </div>
        <div class="flat-armor-class">
            <div class="black-box secondary-armor-box">
                <label>Flat-Footed</label>
                <label>Armor Class</label>
            </div>
            <input type="number" class="common-input">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.secondary-armor-component {
  display: grid;
  grid-template-columns: 40% 1fr;
}

.touch-armor-class {
  display: grid;
  grid-template-columns: 62% 1fr;
  align-items: center;
  justify-items: center;
}

.flat-armor-class {
  display: grid;
  grid-template-columns: 67% 1fr;
  align-items: center;
  justify-items: center;
}

.secondary-armor-box {
  height: 60%;
}
</style>
