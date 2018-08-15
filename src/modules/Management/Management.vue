<template>
  <div class="management">
    <div class="ability-scores">
      <h1>Ability Scores</h1>
      <div class="ability-score"
           v-for="abilityScore in abilityScores"
           :key="abilityScore.name">
        <form>
          <vue-form-generator :schema="abilityScoreSchema"
                              :model="abilityScore">
          </vue-form-generator>
          <div class="ability-score__description-preview">
            <label>Description Preview:</label>
            <v-md :source="abilityScore.description"></v-md>
          </div>
          <div class="ability-score__controls">
            <button class="btn btn-success"
                    @click.prevent="saveAbilityScore(abilityScore)">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AbilityScoresService from '@services/ability-scores.service';

export default {
  data: () => ({
    abilityScores: {},
    abilityScoreSchema: {
      fields: [
        // {
        //   type: 'input',
        //   inputType: 'text',
        //   label: 'Id',
        //   model: '_id',
        //   readonly: true,
        //   disabled: true
        // },
        {
          type: 'input',
          inputType: 'text',
          label: 'Name',
          model: 'name'
        },
        {
          type: 'textArea',
          label: 'Snippet',
          model: 'snippet'
        },
        {
          type: 'textArea',
          label: 'Description',
          model: 'description',
          rows: 12
        }
      ]
    }
  }),
  async created() {
    const abilityScores = await AbilityScoresService.getAll();
    this.abilityScores = abilityScores;
  },
  methods: {
    async saveAbilityScore(abilityScore) {
      await AbilityScoresService.saveOrUpdate(abilityScore);
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.management {
}

.ability-score {
  border: solid 1px black;
  margin-bottom: 14px;
  &__description-preview {
    font-size: 13px;
    padding: 0 12px 10px;
  }
  &__controls {
    display: flex;
    justify-content: flex-end;
    padding: 0 12px 10px;
  }
}
</style>
