<template>
  <div class="skills-component">
    <div class="skills-header">
      <div class="class-skill-wrapper">
        <span>Class Skill?</span>
      </div>
      <div class="skills-header-wrapper">
        <span class="descriptor skills-span">Skills</span>
      </div>
      <div class="max-ranks-wrapper">
        <div>
          <span>Max Ranks</span>
          <span>(Class/Cross Class)</span>
        </div>
        <input type="text">
        <input type="text">
      </div>
      <div class="skill-name-header">
        <span>Skill Name</span>
      </div>
      <div class="skill-descriptor-header">
        <span>Key<br>Ability</span>
      </div>
      <div class="skill-descriptor-header">
        <span>Skill<br>Modifier</span>
      </div>
      <div class="skill-descriptor-header">
        <span>Ability<br>Modifier</span>
      </div>
      <div class="skill-descriptor-header">
        <span>Ranks</span>
      </div>
      <div class="skill-descriptor-header">
        <span>Misc<br>Modifier</span>
      </div>
    </div>
    <div class="skills-body">
      <div v-for="n in 44" :key="n" class="skill-wrapper">
        <div class="cross-class">
          <input type="checkbox">
        </div>
        <div class="skill-name">
          <span>{{n}} Gather Information</span>
        </div>
        <div class="skill-key-ability">
          <span>INT</span>
        </div>
        <div class="skill-modifier">
          <input type="number" value="0" class="common-input">
        </div>
        <div class="skill-ability-modifier">
          <input type="number" value="0" class="only-bottom">
        </div>
        <div class="skill-ranks">
          <input type="number" value="0" class="only-bottom">
        </div>
        <div class="skill-misc-modifier">
          <input type="number" value="0" class="only-bottom">
        </div>
      </div>
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
  grid-template-rows: 6% 94%;
}

.skills-header {
  display: grid;
  grid-template-rows: 65% 35%;
  grid-template-columns: 5% 40% repeat(5, 1fr);
}

.class-skill-wrapper {
  grid-row: 1 / 3;
  grid-column: 1/2;
  background-color: black;
  color: white;
  text-align: center;
}

.class-skill-wrapper span {
  transform: rotate(90deg);
  display: block;
  font-size: 9px;
  padding-left: 5px;
  white-space: nowrap;
}

.skills-header-wrapper {
  grid-column: 1 / 8;
  grid-row: 1 / 2;
  text-align: center;
  background-color: black;
  color: white;
  display: grid;
  align-items: center;
}

.skills-span {
  font-size: 120%;
}

.max-ranks-wrapper {
  grid-row: 1/2;
  grid-column: 4 / span 4;
  color: white;
  text-align: end;
  margin: auto auto;
}

.max-ranks-wrapper div:nth-child(1) {
  display: inline-block;
}

.max-ranks-wrapper span {
  font-size: 8px;
  display: block;
}

.max-ranks-wrapper input {
  width: 20%;
}

.skill-name-header {
  display: grid;
  align-items: center;
  border: solid 1px black;
}

.skill-descriptor-header {
  text-align: center;
  line-height: 7px;
  display: grid;
  align-items: center;
  border: solid 1px black;
}

.skill-name-header span,
.skill-descriptor-header span {
  text-transform: uppercase;
}

.skill-descriptor-header span {
  font-size: 40%;
}

.skills-body {
  display: grid;
  grid-row-gap: 2px;
  grid-auto-rows: 1em;
}

.skills-body div {
  font-size: 78%;
}

.skills-body input {
  width: 90%;
  height: 100%;
  text-align: center;
}

.skill-wrapper {
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

.cross-class {
  display: grid;
  align-items: center;
}
</style>
