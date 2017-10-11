<script>
import SpellListComponent from '../components/spell-list.component';
import SpellModal from '../modals/spell.modal.component';

export default {
    props: ['character', 'addEnabled'],
    components: { SpellModal, SpellListComponent },
    data: function() {
        return {
            showModal: false,
            selected: null
        }
    },
    methods: {
        openSpellDescription: function(spell) {
            this.selected = spell;
            this.showModal = true;
        }
    }
}
</script>
<template>
    <div>
        <div class="spells-container">
            <div class="spells-header black-box">
                <span class="health-points-abbreviation">Spells</span>
                <span class="add-spell-icon glyphicon glyphicon-plus" v-if="addEnabled" @click="showModal = true"></span>
            </div>
            <span class="spells-note">Domains/Specialty School</span>
            <input type="text" class="domain-specialty-school" v-model="character.domainSchool">
            <div class="spells-area">
                <spell-list-component v-for="(spellList, index) in character.spellLists" :key="index" :spellList="spellList" @onSpellSelected="openSpellDescription">
                </spell-list-component>
            </div>
        </div>
        <spell-modal v-if="addEnabled" :show.sync="showModal" :describe-spell.sync="selected" :character-spells="character.spellLists" @onSpellAdded="$emit('onSpellAdded', $event)"
            @onSpellRemoved="$emit('onSpellRemoved', $event)"></spell-modal>
    </div>
</template>