
<template>
  <div>
    <div v-if="describe">
      <div>
        <span>
          <strong>Title:</strong>
        </span>
        <span>{{describe.title}}
          <small>[{{describe.type}}]</small>
        </span>
      </div>
      <div>
        <span>
          <strong>Benefit:</strong>
        </span>
        <label>{{describe.benefit}}</label>
      </div>
      <div v-if="describe.prerequisite">
        <span>
          <strong>Prerequisite:</strong>
        </span>
        <span>{{describe.prerequisite}}</span>
      </div>
      <div v-if="describe.normal">
        <span>
          <strong>Normal:</strong>
        </span>
        <span>{{describe.normal}}</span>
      </div>
      <div v-if="describe.special">
        <span>
          <strong>Special:</strong>
        </span>
        <span>{{describe.special}}</span>
      </div>
      <sub-values-list :model="describe"></sub-values-list>
      <div v-if="describe.miscellaneous">
        <span>
          <strong>Miscellaneous:</strong>
        </span>
        <span>{{describe.miscellaneous}}</span>
      </div>
      <div v-if="describe.aditionalInformation">
        <span>
          <strong>Aditional Information:</strong>
        </span>
        <div v-html="describe.aditionalInformation"></div>
      </div>
    </div>
    <div v-else
         class="form-component editing">
      <div>
        <span>Title:</span>
        <input type="text"
               v-validate="'required'"
               v-model.trim="model.title"
               name="title">
        <span v-show="vErrors.has('title')">{{ vErrors.first('title') }}</span>
      </div>
      <div>
        <span>Type:</span>
        <select v-model="model.type"
                v-validate="'required'"
                name="type">
          <option value="General">General</option>
          <option value="Item Creation">Item Creation</option>
          <option value="Metamagic">Metamagic</option>
          <option value="Reserve">Reserve</option>
        </select>
        <span v-show="vErrors.has('type')">{{ vErrors.first('type') }}</span>
      </div>
      <div>
        <span>Benefit:</span>
        <textarea type="text"
                  v-model.trim="model.benefit"
                  v-validate="'required'"
                  name="benefit"></textarea>
        <span v-show="vErrors.has('benefit')">{{ vErrors.first('benefit') }}</span>
      </div>
      <div>
        <label><input type="checkbox"
                 v-model="has.prerequisite">Prerequisite:</label>
        <textarea v-if="has.prerequisite || model.prerequisite"
                  type="text"
                  v-model.trim="model.prerequisite"></textarea>
      </div>
      <div>
        <label><input type="checkbox"
                 v-model="has.normal">Normal:</label>
        <textarea v-if="has.normal || model.normal"
                  type="text"
                  v-model.trim="model.normal"></textarea>
      </div>
      <div>
        <label><input type="checkbox"
                 v-model="has.special">Special:</label>
        <textarea v-if="has.special || model.special"
                  type="text"
                  v-model.trim="model.special"></textarea>
      </div>
      <div>
        <label><input type="checkbox"
                 v-model.trim="has.subValue">Sub Value:</label>
      </div>
      <sub-values-component v-if="has.subValue"
                            :model="model"></sub-values-component>
      <div>
        <label><input type="checkbox"
                 v-model="has.miscellaneous">Miscellaneous:</label>
        <textarea v-if="has.miscellaneous || model.miscellaneous"
                  type="text"
                  v-model.trim="model.miscellaneous"></textarea>
      </div>
      <div>
        <label><input type="checkbox"
                 v-model="has.aditionalInformation">Aditional Information (as HTML):</label>
        <textarea class="feat-aditional-information-text-area"
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
        prerequisite: false,
        special: false,
        normal: false,
        miscellaneous: false,
        aditionalInformation: false,
        subValue: false
      }
    }
  },
  created() {
    this.modelName = 'feat';
  },
  methods: {
    clear() {
      this.has = {
        prerequisite: false,
        special: false,
        normal: false,
        miscellaneous: false,
        aditionalInformation: false,
        subValue: false
      }
    }
  }
}
</script>
