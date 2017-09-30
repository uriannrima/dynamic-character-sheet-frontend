<script>
import DcsModal from 'Shared/modal.component';
import FeatService from 'Services/feat.service';
import CharacterService from 'Services/character.service';

export default {
    props: ['show', 'describeFeat', 'characterFeats'],
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
    watch: {
        show: function(val) {
            if (val) {
                FeatService.getAll().then(feats => {
                    this.allFeats = feats;
                });
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
            this.$emit('update:describeFeat', null);
            this.$emit('update:show', false);
        },
        addNewFeat: function() {
            // New feat being created.
            if (!this.selectedFeat) {
                FeatService.saveOrUpdate(this.newFeat).then(featCreated => {
                    this.$emit('onFeatAdded', featCreated);
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
        },
        removeFeat: function() {
            this.$emit('onFeatRemoved', this.describeFeat._id);
            this.clear();
            this.close();
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
        <!-- Feat Description -->
        <div slot="body" v-if="describeFeat">
            <div>
                <span>
                    <strong>Feat Title:</strong>
                </span>
                <span>{{describeFeat.title}} [{{describeFeat.type}}]</span>
            </div>
            <div>
                <span>
                    <strong>Benefit:</strong>
                </span>
                <span>{{describeFeat.benefit}}</span>
            </div>
            <div v-if="describeFeat.prerequisite">
                <span>
                    <strong>Prerequisite:</strong>
                </span>
                <span>{{describeFeat.prerequisite}}</span>
            </div>
            <div v-if="describeFeat.normal">
                <span>
                    <strong> Normal:</strong>
                </span>
                <span>{{describeFeat.normal}}</span>
            </div>
            <div v-if="describeFeat.special">
                <span>
                    <strong>Special:</strong>
                </span>
                <span>{{describeFeat.special}}</span>
            </div>
            <div>
                <span v-if="!describeFeat.unique">
                    <strong>This feat can be aquired multiple times.</strong>
                </span>
                <span v-else>
                    <strong>This feat cannot be aquired multiple times.</strong>
                </span>
            </div>
            <div v-if="describeFeat.hasSubValue">
                <span>
                    <strong>{{describeFeat.subValue.title}}:</strong>
                </span>
                <span>{{describeFeat.subValue.value}}</span>
            </div>
        </div>
        <!-- Adding new feat -->
        <div slot="body" v-else>
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
                    <span>Unique:</span>
                    <input type="checkbox" v-model="newFeat.unique" value="true" style="vertical-align: middle">
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
                <div>
                    <span v-if="!selectedFeat.unique">
                        <strong>This feat can be aquired multiple times.</strong>
                    </span>
                    <span v-else>
                        <strong>This feat cannot be aquired multiple times.</strong>
                    </span>
                </div>
            </div>
        </div>
        <div slot="footer" style="text-align: center;">
            <button @click="cancel()">Close</button>
            <button @click="addNewFeat()" v-show="!describeFeat">Add</button>
            <button @click="removeFeat()" v-show="describeFeat">Remove</button>
        </div>
    </dcs-modal>
</template>
