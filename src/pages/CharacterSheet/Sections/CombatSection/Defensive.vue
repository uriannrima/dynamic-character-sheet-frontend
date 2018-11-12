<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Defensive</span>
    <div class="resume-cards__body">
      <resume-card>
        <span slot="header">Armor Class</span>
        <span>{{ armorClass }}</span>
      </resume-card>
      <resume-card>
        <span slot="header">Touch Armor</span>
        <span>{{ touchArmor }}</span>
      </resume-card>
      <resume-card>
        <span slot="header">Flat-Footed</span>
        <span>{{ flatFooted }}</span>
      </resume-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    armorClass: {
      type: Number,
      default: 0
    },
    touchArmor: {
      type: Number,
      default: 0
    },
    flatFooted: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
</style>
