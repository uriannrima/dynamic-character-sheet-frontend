<template>
  <div class="management uk-grid uk-grid-small">
    <div class="sidebar uk-width-1-1 uk-width-small@s">
      <ul class="uk-nav"
          v-for="(section, name) in sections"
          :key="name">
        <li class="uk-parent">
          <router-link :to="{ path: `/management/${name}` }"
                       class="nav-title">{{ name| spaced | capitalized }}</router-link>
          <ul class="uk-nav-sub">
            <li v-for="innerSection in section"
                :key="innerSection._id">
              <router-link :to="{ path: `/management/${name}/${innerSection._id}` }">{{ innerSection._id | spaced | capitalized }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="content uk-width-expand">
      <div class="uk-container uk-margin-top">
        <router-view :ability-scores="sections.abilityScores"></router-view>
      </div>
    </div>
  </div>
  <!-- <div class="management">
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
  </div> -->
</template>

<script>
import AbilityScoresManager from './AbilityScoresManager';
import SheetService from '@services/sheet.service';

export default {
  components: { AbilityScoresManager },
  data: () => ({
    sections: {},
    selectedSection: ''
  }),
  async created() {
    this.sections = await SheetService.getSectionsDescriptions();
  }
};
</script>

<style lang="scss">
@import '~public/styles/components.scss';

.management {
  height: 100vh;
  .sidebar {
    background-color: #2f353a;
  }
  .content {
  }
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

.nav-title {
  font-size: 80%;
  font-weight: 700;
  color: #e4e7ea;
  text-transform: uppercase;
}
</style>
