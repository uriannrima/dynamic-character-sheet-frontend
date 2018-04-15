<template>
  <dcs-modal :show="show" :onClose="close">
    <div slot="header">
      <div class="black-box">
        <label>Feats</label>
      </div>
    </div>
    <div slot="body">
      <div class="select-feat-container" v-if="!editing && !describe">
        <span>Select feat:</span>
        <select v-model="selected">
          <option value="">New feat</option>
          <option v-for="(feat, index) in all" :value="feat" :key="index">{{feat.title}}
          </option>
        </select>
      </div>
      <feat-form :model="model" :describe="selected || describe"></feat-form>
      <div v-show="vErrors.any()">
        <ul>
          <li v-for="(error,index) in vErrors.all()" :key="index">{{error}}</li>
        </ul>
      </div>
    </div>
    <div slot="footer">
      <div v-show="isDuplicated">
        <span style="color: red; font-weight: bold;">Character already has this feat.</span>
      </div>
      <button @click="save()" v-show="editing">Save</button>
      <button @click="cancelEdit()" v-show="editing">Cancel</button>
      <button @click="add()" v-show="!describe && !editing">Add</button>
      <button @click="edit()" v-show="describe || selected">Edit</button>
      <button @click="remove()" v-show="describe">Remove</button>
    </div>
  </dcs-modal>
</template>

<script>
import FeatService from 'services/feat.service';
import { FeatForm } from './';
import { ModalMixin } from 'shared/modal';

export default {
  components: { FeatForm },
  mixins: [ModalMixin],
  created: function () {
    this.service = FeatService;
    this.modelName = 'feat';
  }
}
</script>

<style>

</style>