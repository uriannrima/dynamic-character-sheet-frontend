<template>
  <div class="skill-component">
    <div class="class-skill">
      <input type="checkbox" class="class-skill-input">
    </div>
    <div class="skill-name">
      <span>{{n}} Gather Information</span>
    </div>
    <div class="skill-key-ability">
      <span>INT</span>
    </div>
    <div class="skill-modifier">
      <input type="number" value="0" class="common-input" readonly>
    </div>
    <div class="skill-ability-modifier">
      <input type="number" value="0" class="only-bottom" readonly>
    </div>
    <div class="skill-ranks">
      <input type="number" value="0" class="only-bottom">
    </div>
    <div class="skill-misc-modifier">
      <input type="number" value="0" class="only-bottom">
    </div>
  </div>
</template>

<script>
export default {
  props: ['n']
}
</script>

<style>
.skill-component {
  display: grid;
  grid-template-columns: 5% 40% repeat(5, 1fr);
}

.skill-name {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: grid;
  align-items: center;
}

.skill-key-ability {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  text-align: center;
}

.skill-modifier {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  text-align: center;
}

.skill-ability-modifier {
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  text-align: center;
}

.skill-ranks {
  grid-column: 6 / 7;
  grid-row: 1 / 2;
  text-align: center;
}

.skill-misc-modifier {
  grid-column: 7 / 8;
  grid-row: 1 / 2;
  text-align: center;
}

.class-skill {
  display: grid;
  align-items: center;
  justify-items: center;
}

.class-skill-input {
  width: 75%;
  height: 75%;
}
</style>
