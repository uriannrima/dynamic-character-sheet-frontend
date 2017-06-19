<script>
export default {
    props: ['armorClass', 'initiative']
}
</script>

<style>
.initiative-div {
    display: inline-block;
}

.initiative-input {
    width: 40px;
    display: block;
}

.initiative-description {
    display: block;
    font-weight: bold;
}
</style>

<template>
    <div>
        <table class="table misc-table" style="width:320px;">
            <tbody>
                <tr>
                    <th>
                        <div style="width:70px;">
                            <span>Touch</span>
                            <small>Armor Class</small>
                        </div>
                    </th>
                    <td>
                        <input type="number" class="attribute-field" v-bind:value="armorClass.getTouchArmor()" readonly>
                    </td>
                    <th>
                        <div>
                            <span>Flat-Footed</span>
                            <small>Armor Class</small>
                        </div>
                    </th>
                    <td>
                        <input type="number" class="attribute-field" v-bind:value="armorClass.getFlatFooted()" readonly>
                    </td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <th colspan="2">
                        <div>
                            <span>Initiative</span>
                        </div>
                    </th>
                    <td colspan="2">
                        <div class="initiative-div">
                            <span class="initiative-description">Total</span>
                            <input type="number" class="attribute-field initiative-input" v-bind:value="initiative.getTotal()" readonly>
                        </div>
                        <span>=</span>
                        <div class="initiative-div">
                            <span class="initiative-description">Dex
                            </span>
                            <input type="number" class="attribute-field initiative-input" v-bind:value="initiative.dexModifier" readonly>
                        </div>
                        <span>+</span>
                        <div class="initiative-div">
                            <span class="initiative-description">Misc
                            </span>
                            <input type="number" class="attribute-field initiative-input" attention v-model.number="initiative.miscModifier">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>