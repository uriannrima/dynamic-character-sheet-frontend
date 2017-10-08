<script>
import DcsModal from 'Shared/modal.component';
import FeatService from 'Services/feat.service';
import { FormBus, FeatForm } from 'Shared/forms/';

export default {
    props: ['show', 'describeFeat', 'characterFeats'],
    components: { DcsModal, FeatForm },
    data: function() {
        return {
            backupFeat: null,
            selectedFeat: "",
            newFeat: FeatService.new(),
            editing: false,
            isCharacterFeat: false,
            allFeats: []
        }
    },
    watch: {
        show: function(val) {
            if (val) {
                this.updateAllFeats();
            }
        }
    },
    methods: {
        resetScroll: function() {
            this.$el.querySelector('.v-modal-container').scrollTop = 0;
        },
        updateAllFeats: function() {
            FeatService.getAll().then(feats => {
                this.allFeats = feats;
            });
        },
        clear: function() {
            this.backupFeat = null;
            this.selectedFeat = "";
            this.newFeat = FeatService.new();;
            this.editing = false;
            this.isCharacterFeat = false;
            this.$validator.reset();
            FormBus.$emit('feat:clear');
        },
        cancel: function() {
            this.close();
        },
        close: function() {
            this.clear();
            this.clearDescription();
            this.$emit('update:show', false);
        },
        addNewFeat: function() {
            // New feat being created.
            if (!this.selectedFeat) {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        FeatService.saveOrUpdate(this.newFeat).then(featCreated => {
                            this.$emit('onFeatAdded', this.newFeat);
                            this.close();
                        });
                    }
                });
            } else {
                this.$emit('onFeatAdded', this.selectedFeat);
                this.close();
            }
        },
        removeFeat: function() {
            this.$emit('onFeatRemoved', this.describeFeat);
            this.close();
        },
        saveFeat: function() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    if (!this.isCharacterFeat) {
                        FeatService.saveOrUpdate(this.newFeat).then(featSaved => {
                            // this.updateAllFeats();
                            var index = this.allFeats.findIndex(s => s._id === featSaved._id);
                            this.allFeats.splice(index, 1, featSaved);
                            this.editing = false;
                            this.clear();
                            this.selectedFeat = featSaved;
                            this.resetScroll();
                        });
                    } else {
                        this.$emit('onFeatUpdated', this.newFeat);
                        this.close();
                    }
                }
            });
        },
        editFeat: function() {
            this.backupFeat = this.selectedFeat || this.describeFeat;
            this.resetScroll();
            var data = this.describeFeat || this.selectedFeat;
            if (this.describeFeat) {
                this.isCharacterFeat = true;
            }
            this.newFeat = FeatService.new(data);
            this.editing = true;
            this.clearDescription();
        },
        cancelEdit: function() {
            this.editing = false;
            if (this.isCharacterFeat) {
                this.$emit('update:describeFeat', this.backupFeat);
            } else {
                this.selectedFeat = this.backupFeat;
            }
        },
        clearDescription: function() {
            this.$emit('update:describeFeat', null);
            this.selectedFeat = "";
        }
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

.sub-value-container>span,
.sub-value-container>input[type="text"] {
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
            <div class="select-feat-container" v-if="!describeFeat">
                <span>Select feat:</span>
                <select v-model="selectedFeat">
                    <option value="">New feat</option>
                    <option v-for="(feat, index) in allFeats" :value="feat" :key="index">{{feat.title}}
                    </option>
                </select>
            </div>
            <div class="sub-value-container" v-if="selectedFeat.subValue && selectedFeat.subValue.title">
                <span>{{selectedFeat.subValue.title}}</span>
                <input type="text" v-model.trim="selectedFeat.subValue.value"></input>
            </div>
            <feat-form :feat="newFeat" :describeFeat="selectedFeat || describeFeat"></feat-form>
            <div v-show="errors.any()">
                <ul>
                    <li v-for="(error,index) in errors.all()" :key="index">{{error}}</li>
                </ul>
            </div>
        </div>
        <div slot="footer" style="text-align: center;">
            <button @click="saveFeat()" v-show="editing">Save</button>
            <button @click="cancelEdit()" v-show="editing">Cancel</button>
            <button @click="addNewFeat()" v-show="!describeFeat && !editing">Add</button>
            <button @click="editFeat()" v-show="describeFeat || selectedFeat">Edit</button>
            <button @click="removeFeat()" v-show="describeFeat">Remove</button>
        </div>
    </dcs-modal>
</template>
