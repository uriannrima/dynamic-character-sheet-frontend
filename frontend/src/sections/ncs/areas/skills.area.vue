<template>
  <div class="skills-component">
    <div class="skills-header">
      <span>Skills</span>
    </div>
    <div>
      <span>Body</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.skills-component {
  display: grid;
  grid-template-rows: 10% 90%;
}

.skills-header {
  display: grid;
  grid-template-rows: 45% 55%;
  grid-template-columns: 5% 40% repeat(5, 1fr);
}
</style>
