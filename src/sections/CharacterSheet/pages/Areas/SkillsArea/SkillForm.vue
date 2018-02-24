
<template>
  <div class="skill-form-component">
    <div v-if="describeSkill">
      <div class="skill-form-component-name-container">
        <span>
          <strong>Name:</strong>
        </span>
        <span>{{describeSkill.name}}
          <small>[{{describeSkill.keyAbility}}]</small>
        </span>
      </div>
      <div class="skill-form-component-check-container">
        <span>
          <strong>Check:</strong>
        </span>
        <span>{{describeSkill.check}}</span>
      </div>
      <div class="skill-form-component-action-container">
        <span>
          <strong>Action:</strong>
        </span>
        <span>{{describeSkill.action}}</span>
      </div>
      <div class="skill-form-component-try-again-container"
           v-if="describeSkill.tryAgain">
        <span>
          <strong>Try Again:</strong>
        </span>
        <span>{{describeSkill.tryAgain}}</span>
      </div>
      <div class="skill-form-component-special-container"
           v-if="describeSkill.special">
        <span>
          <strong>Special:</strong>
        </span>
        <span>{{describeSkill.special}}</span>
      </div>
      <div class="skill-form-component-restriction-container"
           v-if="describeSkill.restriction">
        <span>
          <strong>Restriction:</strong>
        </span>
        <span>{{describeSkill.restriction}}</span>
      </div>
      <div class="skill-form-component-synergy-container"
           v-if="describeSkill.synergy">
        <span>
          <strong>Synergy:</strong>
        </span>
        <span>{{describeSkill.synergy}}</span>
      </div>
      <div class="skill-form-component-untrained-description-container"
           v-if="describeSkill.untrainedDescription">
        <span>
          <strong>Untrained Description:</strong>
        </span>
        <span>{{describeSkill.untrainedDescription}}</span>
      </div>
      <div class="skill-form-component-sub-value-container"
           v-if="describeSkill.subValue">
        <span>
          <strong>Sub Value:</strong>
        </span>
        <span>{{describeSkill.subValue}}</span>
      </div>
      <div class="skill-form-component-miscellaneous-container"
           v-if="describeSkill.miscellaneous">
        <span>
          <strong>Miscellaneous:</strong>
        </span>
        <span>{{describeSkill.miscellaneous}}</span>
      </div>
      <div class="skill-form-component-html-container"
           v-if="describeSkill.aditionalInformation">
        <span>
          <strong>Aditional Information:</strong>
        </span>
        <div v-html="describeSkill.aditionalInformation"></div>
      </div>
    </div>
    <div v-else>
      <div class="skill-form-component-name-container">
        <span>Name:</span>
        <input type="text"
               v-validate="'required'"
               v-model.trim="skill.name"
               name="name">
        <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
      </div>
      <div class="skill-form-component-key-ability-container">
        <span>Key Ability:</span>
        <select v-model="skill.keyAbility"
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
                  v-model.trim="skill.check"
                  v-validate="'required'"
                  name="check"></textarea>
        <span v-show="errors.has('check')">{{ errors.first('check') }}</span>
      </div>
      <div class="skill-form-component-action-container">
        <span>Action:</span>
        <textarea type="text"
                  v-model.trim="skill.action"
                  v-validate="'required'"
                  name="action"></textarea>
        <span v-show="errors.has('action')">{{ errors.first('action') }}</span>
      </div>
      <div class="skill-form-component-special-container">
        <label><input type="checkbox"
                 v-model="has.tryAgain">Try Again:</label>
        <textarea v-if="has.tryAgain"
                  type="text"
                  v-model.trim="skill.tryAgain"></textarea>
      </div>
      <div class="skill-form-component-special-container">
        <label><input type="checkbox"
                 v-model="has.special">Special:</label>
        <textarea v-if="has.special || skill.special"
                  type="text"
                  v-model.trim="skill.special"></textarea>
      </div>
      <div class="skill-form-component-restriction-container">
        <label><input type="checkbox"
                 v-model="has.restriction">Restriction:</label>
        <textarea v-if="has.restriction || skill.restriction"
                  type="text"
                  v-model.trim="skill.restriction"></textarea>
      </div>
      <div class="skill-form-component-synergy-container">
        <label><input type="checkbox"
                 v-model="has.synergy">Synergy:</label>
        <textarea v-if="has.synergy || skill.synergy"
                  type="text"
                  v-model.trim="skill.synergy"></textarea>
      </div>
      <div class="skill-form-component-untrained-container">
        <label><input type="checkbox"
                 v-model.trim="skill.untrained">Untrained:</label>
      </div>
      <div class="skill-form-component-untrained-description-container"
           v-if="skill.untrained">
        <span>Untrained Description:</span>
        <textarea type="text"
                  v-model.trim="skill.untrainedDescription"></textarea>
      </div>
      <div class="skill-form-component-armor-check-penaly-container">
        <label><input type="checkbox"
                 v-model.trim="skill.armorCheckPenalty">Armor Check Penalty:</label>
      </div>
      <div class="skill-form-component-has-sub-value-container">
        <label><input type="checkbox"
                 v-model.trim="skill.hasSubValue">Sub Value:</label>
      </div>
      <div class="skill-form-component-sub-value-container">
           v-if="skill.hasSubValue || skill.subValue">
        <span>Value:</span>
        <input type="text"
               v-model.trim="skill.subValue"></input>
      </div>
      <div class="skill-form-component-miscellaneous-container">
        <label><input type="checkbox"
                 v-model="has.miscellaneous">Miscellaneous:</label>
        <textarea v-if="has.miscellaneous || skill.miscellaneous"
                  type="text"
                  v-model.trim="skill.miscellaneous"></textarea>
      </div>
      <div class="skill-form-component-html-container">
        <label><input type="checkbox"
                 v-model="has.aditionalInformation">Aditional Information (as HTML):</label>
        <textarea class="skill-aditional-information-text-area"
                  v-if="has.aditionalInformation || skill.aditionalInformation"
                  type="text"
                  v-model.trim="skill.aditionalInformation"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { FormBus } from 'Shared/form';

export default {
  props: ['skill', 'describeSkill'],
  inject: {
    $validator: '$validator'
  },
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
  },
  methods: {
    clear: function () {
      this.has = {
        tryAgain: false,
        special: false,
        synergy: false,
        untrained: false,
        restriction: false,
        miscellaneous: false,
        aditionalInformation: false
      };
    }
  },
  created: function () {
    FormBus.$on('skill:clear', () => {
      this.clear();
    });
  },
  destroyed: function () {
    FormBus.$off('skill:clear');
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
