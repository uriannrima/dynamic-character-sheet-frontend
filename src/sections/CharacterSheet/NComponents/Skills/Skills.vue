<template>
  <div class="resume-cards">
    <span class="resume-cards__header">Skills</span>
    <div class="resume-cards__body--column">
      <span v-if="skills.length <= 0"
            class="list--no-items">No skills</span>
      <div v-else
           class="skills">
        <div class="skills__header">
          <div class="skills__header__icon">
          </div>
          <div class="skills__header__is-class">
            <span>CS</span>
          </div>
          <div class="skills__header__name">
            <span>Skill</span>
          </div>
          <div class="skills__header__key-ability">
            <span>Ability</span>
          </div>
          <div class="skills__header__modifier">
            <span>Mod</span>
          </div>
        </div>
        <div class="skills__list">
          <skill v-for="skill in skills"
                 :key="skill._id"
                 :skill="skill"
                 :keyAbilityScore="abilityScores[skill.keyAbility]"></skill>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skill from './Skill.vue';

export default {
  components: { Skill },
  props: {
    skills: {
      type: Array,
      default: () => []
    },
    abilityScores: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.skills {
  &__header {
    display: flex;

    span {
      @extend .text-xs;
      text-transform: uppercase;
      font-weight: bold;
    }

    &__is-class {
      width: $skill__is-class--width;
      text-align: center;
    }

    &__icon {
      width: $skill__icon--width;
      text-align: center;
    }

    &__name {
      width: $skill__name--width;
    }

    &__key-ability {
      width: $skill__key-ability--width;
      text-align: center;
    }

    &__modifier {
      width: $skill__modifier--width;
      text-align: center;
    }
  }

  &__list {
    > div:nth-child(even) {
      background-color: #80808012;
    }
  }
}

.skill {
  display: flex;
  align-items: center;
  height: 32px;

  > div {
    height: 100%;
  }

  &__is-class {
    @extend .dcs__icon;
    width: $skill__is-class--width;
    text-align: center;
  }

  &__icon {
    @extend .dcs__icon;
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: $skill__name--width;
    border-bottom: $skill__border-bottom-color;

    span {
      @extend .text-sm;
    }

    small {
      @extend .text-xs;
    }
  }

  &__key-ability {
    @extend .dcs__icon;
    text-transform: uppercase;
    font-weight: bold;
    width: $skill__key-ability--width;
    border-bottom: $skill__border-bottom-color;
    color: $secondary-value__color;
  }

  &__modifier {
    @extend .dcs__icon;
    font-weight: bold;
    width: $skill__modifier--width;
    border-bottom: $skill__border-bottom-color;
  }
}
</style>
