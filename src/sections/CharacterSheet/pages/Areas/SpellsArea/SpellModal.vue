<template>
  <dcs-modal :show="show"
             :onClose="close">
    <div slot="header">
      <div class="black-box">
        <label>Spells</label>
      </div>
    </div>
    <div slot="body">
      <div class="select-spellcontainer"
           v-if="!editing && !describe">
        <span>Select spell:</span>
        <select v-model="selected">
          <option value="">New spell</option>
          <option v-for="(spell, index) in all"
                  :value="spell"
                  :key="index">{{spell.name}}
          </option>
        </select>
      </div>
      <spell-form :model="model"
                  :describe="selected || describe"></spell-form>
      <div v-show="errors.any()">
        <ul>
          <li v-for="(error,index) in errors.all()"
              :key="index">{{error}}</li>
        </ul>
      </div>
    </div>
    <div slot="footer">
      <div v-show="isDuplicated">
        <span style="color: red; font-weight: bold;">Character already has this spell.</span>
      </div>
      <button @click="save()"
              v-show="editing">Save</button>
      <button @click="cancelEdit()"
              v-show="editing">Cancel</button>
      <button @click="add()"
              v-show="!describe && !editing">Add</button>
      <button @click="edit()"
              v-show="describe || selected">Edit</button>
      <button @click="remove()"
              v-show="describe">Remove</button>
    </div>
  </dcs-modal>
</template>

<script>
import SpellService from 'Services/spell.service';
import { SpellForm } from './';
import { ModalMixin } from 'Shared/modal';

export default {
  components: { SpellForm },
  mixins: [ModalMixin],
  created: function () {
    this.service = SpellService;
    this.modelName = 'spell';
  }
}
</script>

<style>

</style>