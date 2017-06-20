<script>
export default {
    props: ["armorClass"]
}
</script>

<style>
.armor-table {
    width: 100%;
}

.armor-table tbody td {
    padding-bottom: 0px !important;
}

.armor-table tbody th,
.armor-table tbody td {
    vertical-align: middle !important;
}

.armor-input {
    display: inline-block;
}

.armor-span {
    display: inline-block;
    font-weight: bold;
    font-size: 23px;
    vertical-align: middle;
}

.armor-div {
    display: inline-block;
    text-align: center;
    vertical-align: top;
}

.armor-description-span {
    display: block;
    font-weight: bold;
}

@media screen and (max-width: 992px) {
    .armor-table {
        width: 869px;
    }
}
</style>

<template>
    <div style="overflow-x:auto">
        <table class="table armor-table">
            <tbody>
                <tr>
                    <th style="width: 10%">
                        <div style="width:70px;">
                            <span>AC</span>
                            <small>Armor Class</small>
                        </div>
                    </th>
                    <td style="width: 7%">
                        <div class="armor-div">
                            <input type="text" class="attribute-field" v-bind:value="armorClass.getTotalArmor()" readonly>
                            <span class="armor-description-span">Total
                                <br>&nbsp</span>
                        </div>
                    </td>
                    <td style="text-align: left">
                        <span class="armor-span">= 10 +</span>
                        <div class="armor-div">
                            <input type="number" class="attribute-field" v-model.number="armorClass.armorBonus" readonly>
                            <span class="armor-description-span">Armor
                                <br>Bonus</span>
                        </div>
                        <span class="armor-span">+</span>
                        <div class="armor-div">
                            <input type="number" class="attribute-field" v-model.number="armorClass.shieldBonus" readonly>
                            <span class="armor-description-span">Shield
                                <br>Bonus</span>
                        </div>
                        <span class="armor-span">+</span>
                        <div class="armor-div">
                            <input type="number" class="attribute-field" v-model.number="armorClass.dexModifier" readonly>
                            <span class="armor-description-span">Dex
                                <br>Modifier</span>
                        </div>
                        <span class="armor-span">+</span>
                        <div class="armor-div">
                            <input type="number" class="attribute-field" v-model.number="armorClass.sizeModifier" readonly>
                            <span class="armor-description-span">Size
                                <br>Modifier</brb>
                            </span>
                        </div>
                        <span class="armor-span">+</span>
                        <div class="armor-div">
                            <input type="number" class="attribute-field" v-model.number="armorClass.naturalArmor" readonly>
                            <span class="armor-description-span">Natural
                                <br>Armor</span>
                        </div>
                        <span class="armor-span">+</span>
                        <div class="armor-div">
                            <input type="number" class="attribute-field" v-model.number="armorClass.deflectionModifier" readonly>
                            <span class="armor-description-span">Deflection
                                <br>Modifier</span>
                        </div>
                        <span class="armor-span">+</span>
                        <div class="armor-div">
                            <input type="number" class="attribute-field" v-bind:class="{ attention: armorClass.miscModifier > 0 }" v-model.number="armorClass.miscModifier">
                            <span class="armor-description-span">Misc
                                <br>Modifier</span>
                        </div>
                    </td>
                    <td>
                        <div class="armor-div">
                            <input type="number" class="attribute-field" style="width: 100px">
                            <span class="armor-description-span">Damage
                                <br>Reduction</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
