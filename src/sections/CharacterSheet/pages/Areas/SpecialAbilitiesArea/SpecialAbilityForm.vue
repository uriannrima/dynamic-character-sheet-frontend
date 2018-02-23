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
    <div class="special-ability-form-component-html-container" v-if="describe.aditionalInformation">
      <span>
        <strong>Aditional Information:</strong>
      </span>
      <div v-html="describe.aditionalInformation"></div>
    </div>
  </div>
  <div v-else>
    <div class="special-ability-form-component-name-container">
      <span>Name:</span>
      <input type="text" v-validate="'required'" v-model.trim="model.name" name="name">
      <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
    </div>
    <div class="special-ability-form-component-type-container">
      <span>Type:</span>
      <select v-model="model.type" v-validate="'required'" name="type">
        <option value="Extraordinary Ability">Extraordinary Abilities (Ex)</option>
        <option value="Spell-Like Ability">Spell-Like Abilities (Sp)</option>
        <option value="Supernatural Ability">Supernatural Abilities (Su)</option>
      </select>
      <span v-show="errors.has('type')">{{ errors.first('type') }}</span>
    </div>
    <div class="special-ability-form-component-description-container">
      <span>Description:</span>
      <textarea type="text" v-model.trim="model.description" v-validate="'required'" name="description"></textarea>
      <span v-show="errors.has('description')">{{ errors.first('description') }}</span>
    </div>
    <div class="special-ability-form-component-has-sub-value-container">
      <label><input type="checkbox" v-model.trim="has.subValue">Sub Value:</label>
    </div>
    <sub-values-component v-if="has.subValue" :model="model"></sub-values-component>
    <div class="special-ability-form-component-html-container">
      <label><input type="checkbox" v-model="has.aditionalInformation">Aditional Information (as HTML):</label>
      <textarea class="special-ability-aditional-information-text-area" v-if="has.aditionalInformation || model.aditionalInformation" type="text" v-model.trim="model.aditionalInformation"></textarea>
    </div>
  </div>
</div>
</template>

<script>
import { FormMixin } from 'Shared/form';
import { SubValuesComponent, SubValuesList } from 'Shared/form/components';

export default {
  mixins: [FormMixin],
  components: { SubValuesComponent, SubValuesList },
  created() {
    this.modelName = 'specialAbility';
  },
  data() {
    return {
      has: {
        aditionalInformation: false,
        subValue: false
      }
    }
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
