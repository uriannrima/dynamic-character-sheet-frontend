<script>
import DcsModal from 'Shared/modal.component';
import SpecialAbilityService from 'Services/special-ability.service';

export default {
    props: ['show', 'describeSpecialAbility', 'characterSpecialAbilities'],
    components: { DcsModal },
    data: function() {
        return {
            selectedSpecialAbility: '',
            newSpecialAbility: SpecialAbilityService.create(),
            allSpecialAbilities: [],
            has: {
                prerequisite: false,
                special: false,
                normal: false
            }
        }
    },
    methods: {
        clear: function() {
            this.selectedSpecialAbility = '';
            this.newSpecialAbility = SpecialAbilityService.create();
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
            this.$emit('update:describeSpecialAbility', null);
            this.$emit('update:show', false);
        },
        addNewSpecialAbility: async function() {
            // New special ability being created.
            if (!this.selectedSpecialAbility) {
                var specialAbilityCreated = await SpecialAbilityService.saveOrUpdate(this.newSpecialAbility)
                this.$emit('onSpecialAbilityAdded', specialAbilityCreated);
                this.clear();
                this.close();
            } else {
                this.$emit('onSpecialAbilityAdded', this.selectedSpecialAbility);
                this.clear();
                this.close();
            }
        },
        removeSpecialAbility: function() {
            this.$emit('onSpecialAbilityRemoved', this.describeSpecialAbility);
            this.clear();
            this.close();
        }
    },
    beforeUpdate: async function() {
        if (this.show) {
            var specialAbilities = await SpecialAbilityService.getAll();
            this.allSpecialAbilities = specialAbilities;
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

.special-abilities-header {
    text-align: center;
}
</style>

<template>
    <dcs-modal :show.sync="show" :on-close="close">
        <div slot="header">
            <div class="special-abilities-header black-box">
                <span class="health-points-abbreviation">Special Ability</span>
            </div>
        </div>
        <!-- Special Ability Description -->
        <div slot="body" v-if="describeSpecialAbility">
            <div>
                <span>
                    <strong>Name:</strong>
                </span>
                <span>{{describeSpecialAbility.name}} [{{describeSpecialAbility.type}}]</span>
            </div>
            <div>
                <span>
                    <strong>Description:</strong>
                </span>
                <span>{{describeSpecialAbility.description}}</span>
            </div>
        </div>
        <!-- Adding new special ability -->
        <div slot="body" v-else>
            <span>Select special ability:</span>
            <select v-model="selectedSpecialAbility">
                <option value="">New special ability</option>
                <option v-for="(specialAbility, index) in allSpecialAbilities" :value="specialAbility" :key="index">{{specialAbility.name}}
                </option>
            </select>
            <div v-if="!selectedSpecialAbility">
                <div>
                    <span style="display:block">Name:</span>
                    <input type="text" v-model="newSpecialAbility.name">
                </div>
                <div>
                    <span style="display:block">Type:</span>
                    <select v-model="newSpecialAbility.type">
                        <option value="Extraordinary Ability">Extraordinary Ability</option>
                        <option value="Spell-Like Ability">Spell-Like Ability</option>
                        <option value="Supernatural Ability">Supernatural Ability</option>
                    </select>
                </div>
                <span style="display:block">Description:</span>
                <textarea type="text" v-model="newSpecialAbility.description"></textarea>
                <div>
                    <span>Sub Value:</span>
                    <input type="checkbox" v-model="newSpecialAbility.hasSubValue" style="vertical-align: middle">
                </div>
                <div v-if="newSpecialAbility.hasSubValue">
                    <span>Title:</span>
                    <input type="text" v-model="newSpecialAbility.subValue.title"></input>
                    <span>Value:</span>
                    <input type="text" v-model="newSpecialAbility.subValue.value"></input>
                </div>
            </div>
            <div v-else>
                <div v-if="selectedSpecialAbility.hasSubValue">
                    <span>
                        <strong>{{selectedSpecialAbility.subValue.title}}:</strong>
                    </span>
                    <input type="text" v-model="selectedSpecialAbility.subValue.value"></input>
                </div>
                <div>
                    <span>
                        <strong>Type:</strong>
                    </span>
                    <span>{{selectedSpecialAbility.type}}</span>
                </div>
                <div>
                    <span>
                        <strong>Description:</strong>
                    </span>
                    <span>{{selectedSpecialAbility.description}}</span>
                </div>
            </div>
        </div>
        <div slot="footer" style="text-align: center;">
            <button @click="cancel()">Close</button>
            <button @click="addNewSpecialAbility()" v-show="!describeSpecialAbility">Add</button>
            <button @click="removeSpecialAbility()" v-show="describeSpecialAbility">Remove</button>
        </div>
    </dcs-modal>
</template>
