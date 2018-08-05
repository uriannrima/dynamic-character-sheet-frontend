<template>
  <div class="skill">
    <div class="skill__icon">
      <i class="material-icons">
        search
      </i>
    </div>
    <div class="dcs__check skill__is-class">
      <label></label>
    </div>
    <div class="skill__details">
      <span :class="{'untrained-skill' : skill.untrained}">{{skill.name}}</span>
      <small v-show="skill.hasSubValues">{{skill.subValues[0]}}</small>
    </div>
    <div class="skill__key-ability" :class="{'check-penalty' : skill.armorCheckPenalty}">
      <span>{{ skill.keyAbility.substring(0,3) }}</span>
    </div>
    <div class="skill__modifier">
      <span>{{skillModifier | signed}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    },
    keyAbilityScore: {
      type: Object,
      required: true
    }
  },
  computed: {
    skillModifier() {
      return (
        this.keyAbilityScore.tempModifier +
        this.skill.rank +
        this.skill.miscModifier +
        this.skill.hiddenModifier
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
