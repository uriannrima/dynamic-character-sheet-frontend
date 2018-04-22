<template>
  <div class="special-ability-form-component">
    <div v-if="describe">
      <div class="special-ability-form-component-name-container">
        <span>
          <strong>Name:</strong>
        </span>
        <span>{{describe.name}}
          <small>[{{describe.type}}]</small>
        </span>
      </div>
      <div class="special-ability-form-component-description-container">
        <span>
          <strong>Description:</strong>
        </span>
        <span>{{describe.description}}</span>
      </div>
      <sub-values-list :model="describe"></sub-values-list>
      <div class="special-ability-form-component-html-container"
           v-if="describe.aditionalInformation">
        <span>
          <strong>Aditional Information:</strong>
        </span>
        <div v-html="describe.aditionalInformation"></div>
      </div>
    </div>
    <div v-else>
      <div class="special-ability-form-component-name-container">
        <span>Name:</span>
        <input type="text"
               v-validate="'required'"
               v-model.trim="model.name"
               name="name">
        <span v-show="vErrors.has('name')">{{ vErrors.first('name') }}</span>
      </div>
      <div class="special-ability-form-component-type-container">
        <span>Type:</span>
        <select v-model="model.type"
                v-validate="'required'"
                name="type">
          <option value="Extraordinary Ability">Extraordinary Abilities (Ex)</option>
          <option value="Spell-Like Ability">Spell-Like Abilities (Sp)</option>
          <option value="Supernatural Ability">Supernatural Abilities (Su)</option>
        </select>
        <span v-show="vErrors.has('type')">{{ vErrors.first('type') }}</span>
      </div>
      <div class="special-ability-form-component-description-container">
        <span>Description:</span>
        <textarea type="text"
                  v-model.trim="model.description"
                  v-validate="'required'"
                  name="description"></textarea>
        <span v-show="vErrors.has('description')">{{ vErrors.first('description') }}</span>
      </div>
      <div class="special-ability-form-component-has-sub-value-container">
        <label><input type="checkbox"
                 v-model.trim="has.subValue">Sub Value:</label>
      </div>
      <sub-values-component v-if="has.subValue"
                            :model="model"></sub-values-component>
      <div class="special-ability-form-component-html-container">
        <label><input type="checkbox"
                 v-model="has.aditionalInformation">Aditional Information (as HTML):</label>
        <textarea class="special-ability-aditional-information-text-area"
                  v-if="has.aditionalInformation || model.aditionalInformation"
                  type="text"
                  v-model.trim="model.aditionalInformation"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { FormMixin } from 'shared/form';
import { SubValuesComponent, SubValuesList } from 'shared/form/components';

export default {
  components: { SubValuesComponent, SubValuesList },  
  mixins: [FormMixin],
  data() {
    return {
      has: {
        aditionalInformation: false,
        subValue: false
      }
    }
  },
  created() {
    this.modelName = 'specialAbility';
  },
  clear() {
    this.has = {
      aditionalInformation: false,
      subValue: false
    }
  }
}
</script>

<style>

</style>
