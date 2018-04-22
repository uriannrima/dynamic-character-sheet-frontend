
<template>
  <div>
    <div v-if="describe">
      <div>
        <span>
          <strong>Name:</strong>
        </span>
        <span>{{describe.name}}
          <small>[{{describe.keyScoreName}}]</small>
        </span>
      </div>
      <div>
        <span>
          <strong>Check:</strong>
        </span>
        <span>{{describe.check}}</span>
      </div>
      <div>
        <span>
          <strong>Action:</strong>
        </span>
        <span>{{describe.action}}</span>
      </div>
      <div v-if="describe.tryAgain">
        <span>
          <strong>Try Again:</strong>
        </span>
        <span>{{describe.tryAgain}}</span>
      </div>
      <div v-if="describe.special">
        <span>
          <strong>Special:</strong>
        </span>
        <span>{{describe.special}}</span>
      </div>
      <div v-if="describe.restriction">
        <span>
          <strong>Restriction:</strong>
        </span>
        <span>{{describe.restriction}}</span>
      </div>
      <div v-if="describe.synergy">
        <span>
          <strong>Synergy:</strong>
        </span>
        <span>{{describe.synergy}}</span>
      </div>
      <div v-if="describe.untrainedDescription">
        <span>
          <strong>Untrained Description:</strong>
        </span>
        <span>{{describe.untrainedDescription}}</span>
      </div>
      <sub-values-list :model="describe"></sub-values-list>
      {{describe.subValues}}
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
        <span>Name:</span>
        <input type="text"
               v-validate="'required'"
               v-model.trim="model.name"
               name="name">
        <span v-show="vErrors.has('name')">{{ vErrors.first('name') }}</span>
      </div>
      <div>
        <span>Key Ability:</span>
        <select v-model="model.keyScoreName"
                v-validate="'required'"
                name="key ability">
          <option value="strength">Strength</option>
          <option value="dexterity">Dexterity</option>
          <option value="constitution">Constitution</option>
          <option value="intelligence">Intelligence</option>
          <option value="wisdom">Wisdom</option>
          <option value="charisma">Charisma</option>
        </select>
        <span v-show="vErrors.has('key ability')">{{ vErrors.first('key ability') }}</span>
      </div>
      <div>
        <span>Check:</span>
        <textarea type="text"
                  v-model.trim="model.check"
                  v-validate="'required'"
                  name="check"></textarea>
        <span v-show="vErrors.has('check')">{{ vErrors.first('check') }}</span>
      </div>
      <div>
        <span>Action:</span>
        <textarea type="text"
                  v-model.trim="model.action"
                  v-validate="'required'"
                  name="action"></textarea>
        <span v-show="vErrors.has('action')">{{ vErrors.first('action') }}</span>
      </div>
      <div>
        <label><input type="checkbox"
                 v-model="has.tryAgain">Try Again:</label>
        <textarea v-if="has.tryAgain"
                  type="text"
                  v-model.trim="model.tryAgain"></textarea>
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
                 v-model="has.restriction">Restriction:</label>
        <textarea v-if="has.restriction || model.restriction"
                  type="text"
                  v-model.trim="model.restriction"></textarea>
      </div>
      <div>
        <label><input type="checkbox"
                 v-model="has.synergy">Synergy:</label>
        <textarea v-if="has.synergy || model.synergy"
                  type="text"
                  v-model.trim="model.synergy"></textarea>
      </div>
      <div>
        <label><input type="checkbox"
                 v-model.trim="model.untrained">Untrained:</label>
      </div>
      <div v-if="model.untrained">
        <span>Untrained Description:</span>
        <textarea type="text"
                  v-model.trim="model.untrainedDescription"></textarea>
      </div>
      <div>
        <label><input type="checkbox"
                 v-model.trim="model.armorCheckPenalty">Armor Check Penalty:</label>
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
        <textarea v-if="has.aditionalInformation || model.aditionalInformation"
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
