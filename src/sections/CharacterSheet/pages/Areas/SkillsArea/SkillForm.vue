
<template>
  <div class="skill-form-component">
    <div v-if="describe">
      <div class="skill-form-component-name-container">
        <span>
          <strong>Name:</strong>
        </span>
        <span>{{describe.name}}
          <small>[{{describe.keyScoreName}}]</small>
        </span>
      </div>
      <div class="skill-form-component-check-container">
        <span>
          <strong>Check:</strong>
        </span>
        <span>{{describe.check}}</span>
      </div>
      <div class="skill-form-component-action-container">
        <span>
          <strong>Action:</strong>
        </span>
        <span>{{describe.action}}</span>
      </div>
      <div class="skill-form-component-try-again-container"
           v-if="describe.tryAgain">
        <span>
          <strong>Try Again:</strong>
        </span>
        <span>{{describe.tryAgain}}</span>
      </div>
      <div class="skill-form-component-special-container"
           v-if="describe.special">
        <span>
          <strong>Special:</strong>
        </span>
        <span>{{describe.special}}</span>
      </div>
      <div class="skill-form-component-restriction-container"
           v-if="describe.restriction">
        <span>
          <strong>Restriction:</strong>
        </span>
        <span>{{describe.restriction}}</span>
      </div>
      <div class="skill-form-component-synergy-container"
           v-if="describe.synergy">
        <span>
          <strong>Synergy:</strong>
        </span>
        <span>{{describe.synergy}}</span>
      </div>
      <div class="skill-form-component-untrained-description-container"
           v-if="describe.untrainedDescription">
        <span>
          <strong>Untrained Description:</strong>
        </span>
        <span>{{describe.untrainedDescription}}</span>
      </div>
      <sub-values-list :model="describe"></sub-values-list>
      <div class="skill-form-component-miscellaneous-container"
           v-if="describe.miscellaneous">
        <span>
          <strong>Miscellaneous:</strong>
        </span>
        <span>{{describe.miscellaneous}}</span>
      </div>
      <div class="skill-form-component-html-container"
           v-if="describe.aditionalInformation">
        <span>
          <strong>Aditional Information:</strong>
        </span>
        <div v-html="describe.aditionalInformation"></div>
      </div>
    </div>
    <div v-else>
      <div class="skill-form-component-name-container">
        <span>Name:</span>
        <input type="text"
               v-validate="'required'"
               v-model.trim="model.name"
               name="name">
        <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
      </div>
      <div class="skill-form-component-key-ability-container">
        <span>Key Ability:</span>
        <select v-model="model.keyAbility"
                v-validate="'required'"
                name="key ability">
          <option value="strength">Strength</option>
          <option value="dexterity">Dexterity</option>
          <option value="constitution">Constitution</option>
          <option value="intelligence">Intelligence</option>
          <option value="wisdom">Wisdom</option>
          <option value="charisma">Charisma</option>
        </select>
        <span v-show="errors.has('key ability')">{{ errors.first('key ability') }}</span>
      </div>
      <div class="skill-form-component-check-container">
        <span>Check:</span>
        <textarea type="text"
                  v-model.trim="model.check"
                  v-validate="'required'"
                  name="check"></textarea>
        <span v-show="errors.has('check')">{{ errors.first('check') }}</span>
      </div>
      <div class="skill-form-component-action-container">
        <span>Action:</span>
        <textarea type="text"
                  v-model.trim="model.action"
                  v-validate="'required'"
                  name="action"></textarea>
        <span v-show="errors.has('action')">{{ errors.first('action') }}</span>
      </div>
      <div class="skill-form-component-special-container">
        <label><input type="checkbox"
                 v-model="has.tryAgain">Try Again:</label>
        <textarea v-if="has.tryAgain"
                  type="text"
                  v-model.trim="model.tryAgain"></textarea>
      </div>
      <div class="skill-form-component-special-container">
        <label><input type="checkbox"
                 v-model="has.special">Special:</label>
        <textarea v-if="has.special || model.special"
                  type="text"
                  v-model.trim="model.special"></textarea>
      </div>
      <div class="skill-form-component-restriction-container">
        <label><input type="checkbox"
                 v-model="has.restriction">Restriction:</label>
        <textarea v-if="has.restriction || model.restriction"
                  type="text"
                  v-model.trim="model.restriction"></textarea>
      </div>
      <div class="skill-form-component-synergy-container">
        <label><input type="checkbox"
                 v-model="has.synergy">Synergy:</label>
        <textarea v-if="has.synergy || model.synergy"
                  type="text"
                  v-model.trim="model.synergy"></textarea>
      </div>
      <div class="skill-form-component-untrained-container">
        <label><input type="checkbox"
                 v-model.trim="model.untrained">Untrained:</label>
      </div>
      <div class="skill-form-component-untrained-description-container"
           v-if="model.untrained">
        <span>Untrained Description:</span>
        <textarea type="text"
                  v-model.trim="model.untrainedDescription"></textarea>
      </div>
      <div class="skill-form-component-armor-check-penaly-container">
        <label><input type="checkbox"
                 v-model.trim="model.armorCheckPenalty">Armor Check Penalty:</label>
      </div>
      <div class="skill-form-component-has-sub-value-container">
        <label><input type="checkbox"
                 v-model.trim="model.hasSubValue">Sub Value:</label>
      </div>
      <div class="skill-form-component-sub-value-container"
           v-if="model.hasSubValue || model.subValue">
        <span>Value:</span>
        <input type="text"
               v-model.trim="model.subValue">
      </div>
      <div class="skill-form-component-miscellaneous-container">
        <label><input type="checkbox"
                 v-model="has.miscellaneous">Miscellaneous:</label>
        <textarea v-if="has.miscellaneous || model.miscellaneous"
                  type="text"
                  v-model.trim="model.miscellaneous"></textarea>
      </div>
      <div class="skill-form-component-html-container">
        <label><input type="checkbox"
                 v-model="has.aditionalInformation">Aditional Information (as HTML):</label>
        <textarea class="skill-aditional-information-text-area"
                  v-if="has.aditionalInformation || model.aditionalInformation"
                  type="text"
                  v-model.trim="model.aditionalInformation"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { default as FormMixin } from 'shared/form/form.mixin';
import { SubValuesComponent, SubValuesList } from 'shared/form/components';

export default {
  components: { SubValuesComponent, SubValuesList },
  mixins: [FormMixin],
  data: function () {
    return {
      has: {
        tryAgain: false,
        special: false,
        synergy: false,
        untrained: false,
        restriction: false,
        miscellaneous: false,
        aditionalInformation: false
      }
    };
  }
}
</script>
<style>
.skill-form-component input[type="checkbox"] {
  vertical-align: middle;
}

.skill-form-component span {
  white-space: pre-line;
}

.skill-form-component > div > div {
  margin-bottom: 10px;
}

.skill-form-component-name-container small {
  text-transform: capitalize;
}

.skill-aditional-information-text-area {
  height: 200px !important;
}

.skill-form-component-html-container table {
  width: 100%;
  margin-bottom: 15px;
  font-size: 12px;
}

.skill-form-component-html-container table thead,
.skill-form-component-html-container table tbody {
  text-align: center;
}

.skill-form-component-html-container table,
.skill-form-component-html-container table thead,
.skill-form-component-html-container table tfoot,
.skill-form-component-html-container table tbody {
  border: solid 1px gray;
}

.skill-form-component-html-container table thead tr:nth-child(1) {
  background-color: gray;
  border: solid 1px black;
}

.skill-form-component-html-container table tbody tr:nth-child(even) {
  background-color: lightgray;
}

.skill-form-component-html-container table caption {
  font-weight: bold;
}
</style>
