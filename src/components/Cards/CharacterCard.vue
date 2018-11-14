<template>
  <card class="character-card">
    <div slot="header"
         class="character-card-header">
      <span>{{character.description.name}}</span>
    </div>
    <div class="character-card-content">
      <div class="character-classes">
        <small v-for="(classe, $index) in classes"
               :key="$index"
               class="character-class">{{classe}}</small>
      </div>
      <div class="character-ability-scores">
        <small v-for="(abilityScore, $index) in abilityScores"
               :key="$index"
               class="character-ability-score">{{abilityScore}}</small>
      </div>
    </div>
  </card>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  computed: {
    classes() {
      return this.character.classes.map(classe => {
        const className = classe.name
          .split(' ')
          .map(word => word.upperFirstLetter())
          .join(' ');
        return `${className} (${classe.level})`;
      });
    },
    abilityScores() {
      return Object.keys(this.character.abilityScores).map(key => {
        const abilityScore = this.character.abilityScores[key];
        const scoreName = abilityScore.name.substring(0, 3).toUpperCase();
        return `${scoreName} (${abilityScore.total})`;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.character-card {
  .character-card-header {
    text-align: center;
    border-bottom: solid 1px black;
  }

  .character-card-content {
    .character-classes {
      text-align: center;
      border-bottom: solid 1px black;
      padding: 0.25em 0;

      .character-class {
        display: block;
      }
    }

    .character-ability-scores {
      text-align: center;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 0.25em 0;
    }
  }
}
</style>
