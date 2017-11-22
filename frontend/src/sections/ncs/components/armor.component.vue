<template>
    <div class="armor-component">
        <div class="health-container">
            <div>Header</div>
            <div>Body</div>
        </div>
        <div class="first-armor-container">
            <div>Body</div>
            <div>Header</div>
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
  grid-template-rows: 40% 1fr;
  align-items: center;
}

.first-armor-container {
  display: grid;
  grid-template-rows: 1fr 40%;
  align-items: center;
}
</style>
