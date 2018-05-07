<template>
  <dcs-modal :show="show"
             :onClose="close">
    <div slot="header">
      <div class="black-box">
        <label>Skills</label>
      </div>
    </div>
    <div slot="body">
      <div class="select-skill-container"
           v-if="!editing && !describe">
        <span>Select skill:</span>
        <select v-model="selected">
          <option value="">New skill</option>
          <option v-for="(skill, index) in all"
                  :value="skill"
                  :key="index">{{skill.name}}
          </option>
        </select>
      </div>
      <skill-form :model="model"
                  :describe="selected || describe"></skill-form>
      <div v-show="vErrors.any()">
        <ul>
          <li v-for="(error,index) in vErrors.all()"
              :key="index">{{error}}</li>
        </ul>
      </div>
    </div>
    <div slot="footer">
      <div v-show="isDuplicated">
        <span style="color: red; font-weight: bold;">Character already has this skill.</span>
      </div>
      <button @click="save()"
              v-show="editing">Save</button>
      <button @click="cancelEdit()"
              v-show="editing">Cancel</button>
      <button @click="add()"
              v-show="!describe && !editing">Add</button>
      <button @click="edit()"
              v-if="canEdit"
              v-show="describe || selected">Edit</button>
      <button @click="remove()"
              v-if="canRemove"
              v-show="describe">Remove</button>
    </div>
  </dcs-modal>
</template>

<script>
import SkillService from 'services/skill.service';
import { SkillForm } from '../Components';
import { ModalMixin } from 'shared/modal';

export default {
  $_veeValidate: {
    validator: 'new'
  },
  components: { SkillForm },
  mixins: [ModalMixin],
  props: {
    canEdit: {
      type: Boolean,
      default: false
    },
    canRemove: {
      type: Boolean,
      default: false
    }
  },
  created: function () {
    this.service = SkillService;
    this.modelName = 'skill';
  }
}
</script>

<style>

</style>
