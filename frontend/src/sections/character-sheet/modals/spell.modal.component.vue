<script>
import DcsModal from 'Shared/modal.component';
import SpellService from 'Services/spell.service';
import CharacterService from 'Services/character.service';

export default {
    props: ['show', 'describeSpell', 'characterSpells'],
    components: { DcsModal },
    data: function() {
        return {
            selectedSpell: "",
            newSpell: SpellService.new(),
            allSpells: [],
            has: {
                prerequisite: false,
                special: false,
                normal: false
            }
        }
    },
    methods: {
        clear: function() {
            this.selectedSpell = "";
            this.newSpell = SpellService.new();
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
            this.$emit('update:describeSpell', null);
            this.$emit('update:show', false);
        },
        addNewSpell: function() {
            // New spell being created.
            if (!this.selectedSpell) {
                SpellService.saveOrUpdate(this.newSpell).then(spellCreated => {
                    this.$emit('onSpellAdded', spellCreated);
                    this.clear();
                    this.close();
                });
            } else {
                this.$emit('onSpellAdded', this.selectedSpell);
                this.clear();
                this.close();
            }
        },
        removeSpell: function() {
            this.$emit('onSpellRemoved', this.describeSpell);
            this.clear();
            this.close();
        }
    },
    beforeUpdate() {
        if (this.show) {
            SpellService.getAll().then(spells => {
                this.allSpells = spells;
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

.spells-header {
    text-align: center;
}
</style>

<template>
    <dcs-modal :show.sync="show" :on-close="close">
        <div slot="header">
            <div class="spells-header black-box">
                <span class="health-points-abbreviation">Spell</span>
            </div>
        </div>
        <!-- Spell Description -->
        <div slot="body" v-if="describeSpell">
            <div>
                <span>
                    <strong>Spell Title:</strong>
                </span>
                <span>{{describeSpell.name}} [{{describeSpell.school}}]</span>
            </div>
            <div>
                <span>
                    <strong>Spell Level:</strong>
                </span>
                <span>{{describeSpell.level}}</span>
            </div>
        </div>
        <!-- Adding new spell -->
        <div slot="body" v-else>
            <span>Select spell:</span>
            <select v-model="selectedSpell">
                <option value="">New spell</option>
                <option v-for="(spell, index) in allSpells" :value="spell" :key="index">{{spell.name}}
                </option>
            </select>
            <div v-if="!selectedSpell">
                <div>
                    <span style="display:block">Spell Name:</span>
                    <input type="text" v-model="newSpell.name">
                </div>
                <div>
                    <span style="display:block">Spell School:</span>
                    <select v-model="newSpell.school">
                        <option value="Abjuration">Abjuration</option>
                        <option value="Conjuration">Conjuration</option>
                        <option value="Divination">Divination</option>
                        <option value="Enchantment">Enchantment</option>
                        <option value="Evocation">Evocation</option>
                        <option value="Illusion">Illusion</option>
                        <option value="Necromancy">Necromancy</option>
                        <option value="Transmutation">Transmutation</option>
                        <option value="Universal">Universal</option>
                    </select>
                </div>
                <div>
                    <span style="display:block">Spell Level:</span>
                    <input type="number" v-model="newSpell.level" min="0" max="9">
                </div>
            </div>
            <div v-else>
                <div>
                    <span>
                        <strong>Spell School:</strong>
                    </span>
                    <span>{{selectedSpell.school}}</span>
                </div>
                <div>
                    <span>
                        <strong>Spell Level:</strong>
                    </span>
                    <span>{{selectedSpell.level}}</span>
                </div>
            </div>
        </div>
        <div slot="footer" style="text-align: center;">
            <button @click="cancel()">Close</button>
            <button @click="addNewSpell()" v-show="!describeSpell">Add</button>
            <button @click="removeSpell()" v-show="describeSpell">Remove</button>
        </div>
    </dcs-modal>
</template>
