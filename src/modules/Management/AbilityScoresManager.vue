<template>
  <div class="ability-scores-manager uk-card uk-card-default">
    <div class="uk-card-body">
      <ul class="uk-tab uk-child-width-expand"
          uk-tab>
        <li v-for="abilityScore in abilityScores"
            :key="abilityScore._id"
            :class="{'uk-active' : selectedScore._id === abilityScore._id}">
          <a @click="selectedScore = abilityScore">{{abilityScore.name}}</a>
        </li>
      </ul>
      <div class="uk-panel uk-grid uk-grid-small">
        <div class="uk-width-1-1 uk-width-1-2@m">
          <vue-form-generator :schema="schema"
                              :model="selectedScore">
          </vue-form-generator>
        </div>
        <div class="description-preview uk-width-1-1 uk-width-1-2@m">
          <label class="description-preview__header">Preview:</label>
          <v-md class="description-preview__content"
                :source="selectedScore.description">
          </v-md>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.selectedScoreName = to.params.id;
    });
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    abilityScores: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedScoreName: '',
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
            model: 'snippet',
            rows: 3
          },
          {
            type: 'textArea',
            label: 'Description',
            model: 'description',
            rows: 14
          }
        ]
      }
    };
  },
  computed: {
    selectedScore: {
      get() {
        return (
          this.abilityScores.find(
            score => score._id === this.selectedScoreName
          ) || this.abilityScores[0]
        );
      },
      set(value) {
        if (value) {
          if (value._id) {
            this.selectedScoreName = value._id;
          } else {
            this.selectedScoreName = value;
          }
        }
      }
    }
  },
  watch: {
    id: function(newId) {
      this.selectedScoreName = newId;
    },
    abilityScores: function(newValue) {
      this.selectedScore = newValue[0];
    }
  }
};
</script>

<style lang="scss">
.ability-scores-manager {
  .description-preview {
    padding: 0.35em 0.75em 0.625em;

    &__content {
      font-size: 13px;
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0 0 0.2em;
      }

      p {
        margin: 0 0 15px;
      }

      ul {
        padding-left: 1.5em;
      }
    }
  }
  &__controls {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
