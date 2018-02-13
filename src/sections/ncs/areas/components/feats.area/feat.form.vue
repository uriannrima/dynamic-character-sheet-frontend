
<template>
  <div class="feat-form-component">
    <div v-if="describe">
      <div class="feat-form-component-name-container">
        <span>
          <strong>Title:</strong>
        </span>
        <span>{{describe.title}}
          <small>[{{describe.type}}]</small>
        </span>
      </div>
      <div class="feat-form-component-benefit-container">
        <span>
          <strong>Benefit:</strong>
        </span>
        <span>{{describe.benefit}}</span>
      </div>
      <div class="feat-form-component-prerequisite-container" v-if="describe.prerequisite">
        <span>
          <strong>Prerequisite:</strong>
        </span>
        <span>{{describe.prerequisite}}</span>
      </div>
      <div class="feat-form-component-normal-container" v-if="describe.normal">
        <span>
          <strong>Normal:</strong>
        </span>
        <span>{{describe.normal}}</span>
      </div>
      <div class="feat-form-component-special-container" v-if="describe.special">
        <span>
          <strong>Special:</strong>
        </span>
        <span>{{describe.special}}</span>
      </div>
      <div v-if="describe.subValue && describe.subValue.title && describe.subValue.value" class="feat-form-component-sub-value-container">
        <span>
          <strong>{{describe.subValue.title}}</strong>
        </span>
        <span>{{describe.subValue.value}}</span>
      </div>
      <div class="feat-form-component-miscellaneous-container" v-if="describe.miscellaneous">
        <span>
          <strong>Miscellaneous:</strong>
        </span>
        <span>{{describe.miscellaneous}}</span>
      </div>
      <div class="feat-form-component-html-container" v-if="describe.aditionalInformation">
        <span>
          <strong>Aditional Information:</strong>
        </span>
        <div v-html="describe.aditionalInformation"></div>
      </div>
    </div>
    <div v-else>
      <div class="feat-form-component-title-container">
        <span>Title:</span>
        <input type="text" v-validate="'required'" v-model.trim="model.title" name="title">
        <span v-show="errors.has('title')">{{ errors.first('title') }}</span>
      </div>
      <div class="feat-form-component-type-container">
        <span>Type:</span>
        <select v-model="model.type" v-validate="'required'" name="type">
          <option value="General">General</option>
          <option value="Item Creation">Item Creation</option>
          <option value="Metamagic">Metamagic</option>
          <option value="Reserve">Reserve</option>
        </select>
        <span v-show="errors.has('type')">{{ errors.first('type') }}</span>
      </div>
      <div class="feat-form-component-benefit-container">
        <span>Benefit:</span>
        <textarea type="text" v-model.trim="model.benefit" v-validate="'required'" name="benefit"></textarea>
        <span v-show="errors.has('benefit')">{{ errors.first('benefit') }}</span>
      </div>
      <div class="feat-form-component-prerequisite-container">
        <label><input type="checkbox" v-model="has.prerequisite">Prerequisite:</label>
        <textarea v-if="has.prerequisite || model.prerequisite" type="text" v-model.trim="model.prerequisite"></textarea>
      </div>
      <div class="feat-form-component-normal-container">
        <label><input type="checkbox" v-model="has.normal">Normal:</label>
        <textarea v-if="has.normal || model.normal" type="text" v-model.trim="model.normal"></textarea>
      </div>
      <div class="feat-form-component-special-container">
        <label><input type="checkbox" v-model="has.special">Special:</label>
        <textarea v-if="has.special || model.special" type="text" v-model.trim="model.special"></textarea>
      </div>
      <div class="feat-form-component-has-sub-value-container">
        <label><input type="checkbox" v-model.trim="model.hasSubValue">Sub Value:</label>
      </div>
      <div class="feat-form-component-sub-value-container" v-if="model.hasSubValue || model.subValue && model.subValue.title">
        <span>Title:</span>
        <input type="text" v-model="model.subValue.title">
        <span>Value:</span>
        <input type="text" v-model="model.subValue.value">
      </div>
      <div class="feat-form-component-miscellaneous-container">
        <label><input type="checkbox" v-model="has.miscellaneous">Miscellaneous:</label>
        <textarea v-if="has.miscellaneous || model.miscellaneous" type="text" v-model.trim="model.miscellaneous"></textarea>
      </div>
      <div class="feat-form-component-html-container">
        <label><input type="checkbox" v-model="has.aditionalInformation">Aditional Information (as HTML):</label>
        <textarea class="feat-aditional-information-text-area" v-if="has.aditionalInformation || model.aditionalInformation" type="text" v-model.trim="model.aditionalInformation"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { FormBus, FormMixin } from 'Shared/form';

export default {
  mixins: [FormMixin],
  created() {
    this.modelName = 'feat';
  },
  data() {
    return {
      has: {
        prerequisite: false,
        special: false,
        normal: false,
        miscellaneous: false,
        aditionalInformation: false
      }
    }
  },
  methods: {
    clear() {
      this.has = {
        prerequisite: false,
        special: false,
        normal: false,
        miscellaneous: false,
        aditionalInformation: false
      }
    }
  }
}
</script>
<style>
.feat-form-component input[type="checkbox"] {
  vertical-align: middle;
}

.feat-form-component span {
  white-space: pre-line;
}

.feat-form-component > div > div {
  margin-bottom: 10px;
}

.feat-form-component-name-container small {
  text-transform: capitalize;
}

.feat-aditional-information-text-area {
  height: 200px !important;
}

.feat-form-component-html-container table {
  width: 100%;
  margin-bottom: 15px;
  font-size: 12px;
}

.feat-form-component-html-container table thead,
.feat-form-component-html-container table tbody {
  text-align: center;
}

.feat-form-component-html-container table,
.feat-form-component-html-container table thead,
.feat-form-component-html-container table tfoot,
.feat-form-component-html-container table tbody {
  border: solid 1px gray;
}

.feat-form-component-html-container table thead tr:nth-child(1) {
  background-color: gray;
  border: solid 1px black;
}

.feat-form-component-html-container table tbody tr:nth-child(even) {
  background-color: lightgray;
}

.feat-form-component-html-container table caption {
  font-weight: bold;
}
</style>
