<template>
  <div class="management">
    <div class="saving-throws">
      <h4>Saving Throws</h4>
      <div class="edit-panel"
           v-for="savingThrow in savingThrows"
           :key="savingThrow.name">
        <form>
          <vue-form-generator :schema="savingThrowSchema"
                              :model="savingThrow">
          </vue-form-generator>
          <div class="edit-panel__controls">
            <button class="btn btn-success"
                    @click.prevent="saveSavingThrow(savingThrow)">Save</button>
          </div>
        </form>
      </div>
    </div>
    <div class="ability-scores">
      <h4>Ability Scores</h4>
      <div class="edit-panel"
           v-for="abilityScore in abilityScores"
           :key="abilityScore.name">
        <form>
          <vue-form-generator :schema="abilityScoreSchema"
                              :model="abilityScore">
          </vue-form-generator>
          <div class="edit-panel__description-preview">
            <label>Description Preview:</label>
            <v-md :source="abilityScore.description"></v-md>
          </div>
          <div class="edit-panel__controls">
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
import SavingThrowsService from '@services/saving-throws.service';

export default {
  data: () => ({
    abilityScores: {},
    savingThrows: {},
    abilityScoreSchema: {
      fields: [
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
    },
    savingThrowSchema: {
      fields: [
        {
          type: 'input',
          inputType: 'text',
          label: 'Name',
          model: 'name'
        },
        {
          type: 'textArea',
          label: 'Snippet',
          model: 'snippet',
          rows: 6
        }
      ]
    }
  }),
  async created() {
    const abilityScores = await AbilityScoresService.getAll();
    const savingThrows = await SavingThrowsService.getAll();
    this.abilityScores = abilityScores;
    this.savingThrows = savingThrows;
  },
  methods: {
    async saveAbilityScore(abilityScore) {
      await AbilityScoresService.saveOrUpdate(abilityScore);
    },
    async saveSavingThrow(savingThrow) {
      await SavingThrowsService.saveOrUpdate(savingThrow);
    }
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.management {
}

.edit-panel {
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
