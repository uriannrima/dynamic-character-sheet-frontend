<template>
  <div class="management">
    <div class="saving-throws">
      <h4>Saving Throws</h4>
      <div class="edit-panel"
           v-for="savingThrow in savingThrows"
           :key="savingThrow.name">
        <form>
          <vue-form-generator :schema="schema"
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
          <vue-form-generator :schema="schema"
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
    <div class="miscelaneous">
      <h4>Miscelaneous</h4>
      <div class="edit-panel"
           v-for="misc in miscelaneous"
           :key="misc.name">
        <form>
          <vue-form-generator :schema="schema"
                              :model="misc">
          </vue-form-generator>
          <div class="edit-panel__description-preview">
            <label>Description Preview:</label>
            <v-md :source="misc.description"></v-md>
          </div>
          <div class="edit-panel__controls">
            <button class="btn btn-success"
                    @click.prevent="saveMiscelaneous(misc)">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SheetService from '@services/sheet.service';

export default {
  data: () => ({
    abilityScores: {},
    savingThrows: {},
    miscelaneous: {},
    schema: {
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
    }
  }),
  async created() {
    const descriptions = await SheetService.getDescriptions();
    this.abilityScores = descriptions.abilityScores;
    this.savingThrows = descriptions.savingThrows;
    this.miscelaneous = descriptions.miscelaneous;
  },
  methods: {
    async saveAbilityScore(abilityScore) {
      await SheetService.updateDescription('ability-scores', abilityScore);
    },
    async saveSavingThrow(savingThrow) {
      await SheetService.updateDescription('saving-throws', savingThrow);
    },
    async saveMiscelaneous(miscelaneous) {
      await SheetService.updateDescription('miscelaneous', miscelaneous);
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
