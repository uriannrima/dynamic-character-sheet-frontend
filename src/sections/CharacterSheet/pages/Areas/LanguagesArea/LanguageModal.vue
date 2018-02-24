<template>
  <dcs-modal :show="show"
             :onClose="close">
    <div slot="header">
      <div class="black-box">
        <label>Languages</label>
      </div>
    </div>
    <div slot="body">
      <div class="select-language-container"
           v-if="!editing && !describe">
        <span>Select language:</span>
        <select v-model="selected">
          <option value="">New language</option>
          <option v-for="(language, index) in all"
                  :value="language"
                  :key="index">{{language.name}}
          </option>
        </select>
      </div>
      <language-form :model="model"
                     :describe="selected || describe"></language-form>
      <div v-show="errors.any()">
        <ul>
          <li v-for="(error,index) in errors.all()"
              :key="index">{{error}}</li>
        </ul>
      </div>
    </div>
    <div slot="footer">
      <div v-show="isDuplicated">
        <span style="color: red; font-weight: bold;">Character already has this language.</span>
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
import LanguageService from 'Services/language.service';
import { LanguageForm } from './';
import { ModalMixin } from 'Shared/modal';

export default {
  components: { LanguageForm },
  mixins: [ModalMixin],
  created: function () {
    this.service = LanguageService;
    this.modelName = 'language';
  }
}
</script>

<style>

</style>