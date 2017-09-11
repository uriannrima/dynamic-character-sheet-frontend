<script>
import DcsModal from 'Shared/modal.component';
import FeatService from 'Services/feat.service';

export default {
    props: ['show'],
    components: { DcsModal },
    data: function() {
        return {
            selectedFeat: "",
            newFeat: FeatService.new(),
            allFeats: [],
            has: {
                prerequisite: false,
                special: false,
                normal: false
            }
        }
    },
    methods: {
        clear: function() {
            this.selectedFeat = "";
            this.newFeat = FeatService.new();
            this.has = {
                prerequisite: false,
                special: false,
                normal: false
            }
        },
        cancel: function() {
            this.close();
        },
        close: function() {
            this.clear();
            this.$emit('update:show', false);
        },
        createNewFeat: function() {
            // New feat being created.
            if (!this.selectedFeat) {
                FeatService.saveOrUpdate(this.newFeat).then(feat => {
                    this.newFeat._id = feat._id;
                    this.$emit('onFeatAdded', this.newFeat);
                    this.clear();
                    this.close();
                });
            } else {
                if (this.selectedFeat.hasSubValue) {
                    this.selectedFeat.subValue = this.newFeat.subValue;
                }
                this.$emit('onFeatAdded', this.selectedFeat);
                this.clear();
                this.close();
            }
        }
    },
    beforeUpdate() {
        if (this.show) {
            FeatService.getAll().then(feats => {
                this.allFeats = feats;
            });
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
</style>

<template>
    <dcs-modal :show.sync="show" :on-close="close">
        <div slot="header">
            <div class="feats-header black-box">
                <span class="health-points-abbreviation">Feat</span>
            </div>
        </div>
        <div slot="body">
            <span>Select feat:</span>
            <select v-model="selectedFeat">
                <option value="">New feat</option>
                <option v-for="(feat, index) in allFeats" :value="feat" :key="index">{{feat.title}}
                </option>
            </select>
            <div v-if="!selectedFeat">
                <div>
                    <span style="display:block">Feat Title:</span>
                    <input type="text" v-model="newFeat.title">
                </div>
                <div>
                    <span style="display:block">Feat Type:</span>
                    <select v-model="newFeat.type">
                        <option value="General">General</option>
                        <option value="Item Creation">Item Creation</option>
                        <option value="Metamagic">Metamagic</option>
                        <option value="Reserve">Reserve</option>
                    </select>
                </div>
                <span style="display:block">Benefit:</span>
                <textarea type="text" v-model="newFeat.benefit"></textarea>
                <div>
                    <span>Prerequisite:</span>
                    <input type="checkbox" v-model="has.prerequisite" style="vertical-align: middle">
                </div>
                <div v-if="has.prerequisite">
                    <textarea type="text" v-model="newFeat.prerequisite"></textarea>
                </div>
                <div>
                    <span>Normal:</span>
                    <input type="checkbox" v-model="has.normal" style="vertical-align: middle">
                </div>
                <div v-if="has.normal">
                    <textarea type="text" v-model="newFeat.normal"></textarea>
                </div>
                <div>
                    <span>Special:</span>
                    <input type="checkbox" v-model="has.special" style="vertical-align: middle">
                </div>
                <div v-if="has.special">
                    <textarea type="text" v-model="newFeat.special"></textarea>
                </div>
                <div>
                    <span>Sub Value:</span>
                    <input type="checkbox" v-model="newFeat.hasSubValue" style="vertical-align: middle">
                </div>
                <div v-if="newFeat.hasSubValue">
                    <span>Title:</span>
                    <input type="text" v-model="newFeat.subValue.title"></input>
                    <span>Value:</span>
                    <input type="text" v-model="newFeat.subValue.value"></input>
                </div>
            </div>
            <div v-else>
                <div v-if="selectedFeat.hasSubValue">
                    <span>
                        <strong>{{selectedFeat.subValue.title}}:</strong>
                    </span>
                    <input type="text" v-model="newFeat.subValue.value"></input>
                </div>
                <div>
                    <span>
                        <strong>Feat Type:</strong>
                    </span>
                    <span>{{selectedFeat.type}}</span>
                </div>
                <div>
                    <span>
                        <strong>Benefit:</strong>
                    </span>
                    <span>{{selectedFeat.benefit}}</span>
                </div>
                <div v-if="selectedFeat.prerequisite">
                    <span>
                        <strong>Prerequisite:</strong>
                    </span>
                    <span>{{selectedFeat.prerequisite}}</span>
                </div>
                <div v-if="selectedFeat.normal">
                    <span>
                        <strong> Normal:</strong>
                    </span>
                    <span>{{selectedFeat.normal}}</span>
                </div>
                <div v-if="selectedFeat.special">
                    <span>
                        <strong>Special:</strong>
                    </span>
                    <span>{{selectedFeat.special}}</span>
                </div>
            </div>
        </div>
        <div slot="footer">
            <button @click="cancel()">Cancel</button>
            <button @click="createNewFeat()">Save</button>
        </div>
    </dcs-modal>
</template>
