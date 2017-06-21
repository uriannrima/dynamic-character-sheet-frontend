<script>
export default {
    props: ['savingThrow', 'firstRow']
}
</script>

<template>
    <tr>
        <th>
            <span>{{savingThrow.name}}</span>
            <small>{{savingThrow.keyAbility}}</small>
        </th>
        <td style="width: 55%">
            <div style="display:inline-block">
                <label for="" style="display:block; margin-top:-25px;" v-if="firstRow">Total</label>
                <input type="number" class="attribute-field" style="display:block" readonly :value="savingThrow.getTotal()">
            </div>
            <span>=</span>
            <div style="display:inline-block">
                <label for="" style="display:block; margin-top:-25px; font-size:12px" v-if="firstRow">Base</label>
                <input type="number" class="attribute-field" style="display:block" readonly :value="savingThrow.base">
            </div>
            <span>+</span>
            <div style="display:inline-block">
                <label for="" style="display:block; margin-top:-25px; font-size:12px" v-if="firstRow">Ability</label>
                <input type="number" class="attribute-field" style="display:block" readonly :value="savingThrow.abilityModifier">
            </div>
            <span>+</span>
            <div style="display:inline-block">
                <label for="" style="display:block; margin-top:-25px; font-size:12px" v-if="firstRow">Magic</label>
                <input type="number" class="attribute-field" style="display:block" v-model.number="savingThrow.magicModifier">
            </div>
            <span>+</span>
            <div style="display:inline-block">
                <label for="" style="display:block; margin-top:-25px; font-size:12px" v-if="firstRow">Misc</label>
                <input type="number" class="attribute-field" style="display:block" :class="{ attention: savingThrow.miscModifier > 0 }" v-model.number="savingThrow.miscModifier">
            </div>
            <span>+</span>
            <div style="display:inline-block">
                <label for="" style="display:block; margin-top:-25px; font-size:12px" v-if="firstRow">Temp</label>
                <input type="number" class="attribute-field" style="display:block" :class="{ attention: savingThrow.tempModifier > 0 }" v-model.number="savingThrow.tempModifier">
            </div>
        </td>    
        <td rowspan="3"  v-if="firstRow">
            <div style="display:inline-block">
                <textarea rows="3" style="height: 130px; display:block"></textarea>
                <label for="">Condition Modifiers</label>
            </div>
        </td>
    </tr>
</template>
