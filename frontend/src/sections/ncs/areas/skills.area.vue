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
  font-size: 12px;
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
</style>
