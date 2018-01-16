<script>
import FeatService from 'Services/feat.service';
import { FeatForm } from 'Shared/forms/';
import { default as ModalModelMixin } from './modal-model.mixin';

export default {
    components: { FeatForm },
    mixins: [ModalModelMixin],
    created: function () {
        this.service = FeatService;
        this.modelName = 'feat';
    }
}
</script>

<style scoped>
input[type="text"],
textarea,
select {
  width: 100%;
}

textarea {
  height: 80px;
  font-size: 12px;
}

.v-modal-container {
  width: 360px;
}

.feats-header {
  text-align: center;
}

.feat-form-component>>>textarea {
  display: block;
  width: 100%;
  height: 80px;
  font-size: 12px;
}

.feat-form-component>>>input[type="text"],
.feat-form-component>>>select {
  display: block;
  width: 100%;
}

.feat-form-component>>>strong {
  display: block;
}

.sub-value-container {
  margin-bottom: 5px;
}

.sub-value-container > span,
.sub-value-container > input[type="text"] {
  display: block;
  width: 100%;
}

.select-feat-container {
  margin-bottom: 10px;
}
</style>

<template>
    <dcs-modal :show.sync="show" :on-close="close">
        <div slot="header">
            <div class="feats-header black-box">
                <span class="health-points-abbreviation">Feat</span>
            </div>
        </div>
        <div slot="body">
            <div class="select-feat-container" v-if="!describe">
                <span>Select feat:</span>
                <select v-model="selected">
                    <option value="">New feat</option>
                    <option v-for="(feat, index) in all" :value="feat" :key="index">{{feat.title}}
                    </option>
                </select>
            </div>
            <div class="sub-value-container" v-if="selected.subValue && selected.subValue.title">
                <span>{{selected.subValue.title}}</span>
                <input type="text" v-model.trim="selected.subValue.value"></input>
            </div>
            <feat-form :feat="model" :describeFeat="selected || describe"></feat-form>
            <div v-show="errors.any()">
                <ul>
                    <li v-for="(error,index) in errors.all()" :key="index">{{error}}</li>
                </ul>
            </div>
        </div>
        <div slot="footer" style="text-align: center;">
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
