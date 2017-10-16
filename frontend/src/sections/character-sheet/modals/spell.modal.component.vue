<script>
import SpellService from 'Services/spell.service';
import { SpellForm } from 'Shared/forms/';
import { default as ModalModelMixin } from './modal-model.mixin';

export default {
    components: { SpellForm },
    mixins: [ModalModelMixin],
    created: function() {
        this.service = SpellService;
        this.modelName = 'spell';
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


.feat-form-component>>>textarea {
    display: block;
    width: 100%;
    height: 80px;
    font-size: 12px;
}

.spell-form-component>>>input[type="text"],
.spell-form-component>>>input[type="number"],
.spell-form-component>>>select {
    display: block;
    width: 100%;
}

.spell-form-component>>>strong {
    display: block;
}
</style>

<template>
    <dcs-modal :show.sync="show" :on-close="close">
        <div slot="header">
            <div class="spells-header black-box">
                <span class="health-points-abbreviation">Spell</span>
            </div>
        </div>
        <div slot="body">
            <div class="select-spell-container" v-if="!describe">
                <span>Select spell:</span>
                <select v-model="selected">
                    <option value="">New spell</option>
                    <option v-for="(spell, index) in all" :value="spell" :key="index">{{spell.name}}
                    </option>
                </select>
            </div>
            <spell-form :model="model" :describe="selected || describe"></spell-form>
            <div v-show="errors.any()">
                <ul>
                    <li v-for="(error,index) in errors.all()" :key="index">{{error}}</li>
                </ul>
            </div>
        </div>
        <div slot="footer" style="text-align: center;">
            <button @click="cancel()">Close</button>
            <button @click="add()" v-show="!describe">Add</button>
            <button @click="remove()" v-show="describe">Remove</button>
        </div>
    </dcs-modal>
</template>
