<script>
export default {
    props: ['grapple']
}
</script>


<style>
.grapple-div {
    display: inline-block;
    text-align: center;
    vertical-align: top;
}

.grapple-field {
    width: 75px;
}

.grapple-table tbody th {
    width: 36%;
}

@media only screen and (max-width:992px) {

    .grapple-sign {
        vertical-align: top;
        display: inline-block;
        margin-top: 7px;
    }

    .grapple-description {
        font-size: 12px;
    }

    .grapple-field {
        width: 50px;
    }
}
</style>

<template>
    <div style="overflow-x: auto">
        <table class="table grapple-table hidden-xs" style="width:756px">
            <tbody>
                <tr>
                    <th>
                        <span>Grapple</span>
                        <small>Modifier</small>
                    </th>
                    <td style="text-align:left">
                        <div class="grapple-div" style="margin-left: 24px;">
                            <input type="number" class="attribute-field" readonly v-bind:value="grapple.getTotal()">
                            <span class="armor-description-span">Total</span>
                        </div>
                        <span class="armor-span">=</span>
                        <div class="grapple-div">
                            <input type="number" class="attribute-field grapple-field" readonly v-bind:value="grapple.baseAttackBonus">
                            <span class="armor-description-span">Base Attack
                                <br>Bonus</span>
                        </div>
                        <span class="armor-span">+</span>
                        <div class="grapple-div">
                            <input type="number" class="attribute-field grapple-field" readonly v-bind:value="grapple.strengthModifier">
                            <span class="armor-description-span">Strength
                                <br>Modifier</span>
                        </div>
                        <span class="armor-span">+</span>
                        <div class="grapple-div">
                            <input type="number" class="attribute-field grapple-field" readonly v-bind:value="grapple.sizeModifier">
                            <span class="armor-description-span">Size
                                <br>Modifier</span>
                        </div>
                        <span class="armor-span">+</span>
                        <div class="grapple-div">
                            <input type="number" class="attribute-field grapple-field" v-bind:class="{ attention: grapple.miscModifier > 0 }" v-model.number="grapple.miscModifier">
                            <span class="armor-description-span">Misc
                                <br>Modifier</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="table grapple-table-mobile visible-xs">
            <thead>
                <tr>
                    <th style="background-color:black; color:white;">
                        <div>
                            <span>Grapple
                                <br>Modifier</span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr style="text-align: center;">
                    <td>
                        <div class="grapple-div">
                            <input style="display:block" type="number" class="attribute-field grapple-field" readonly v-bind:value="grapple.getTotal()">
                            <label class="grapple-description">Total</label>
                        </div>
                        <span class="grapple-sign">=</span>
                        <div class="grapple-div">
                            <input style="display:block" type="number" class="attribute-field grapple-field" readonly v-bind:value="grapple.baseAttackBonus">
                            <label class="grapple-description">
                                Attack
                                <br>Bonus
                            </label>
                        </div>
                        <span class="grapple-sign">+</span>
                        <div class="grapple-div">
                            <input style="display:block" type="number" class="attribute-field grapple-field" readonly v-bind:value="grapple.strengthModifier">
                            <label class="grapple-description">Strength
                                <br>Modifier</label>
                        </div>
                        <span class="grapple-sign">+</span>
                        <div class="grapple-div">
                            <input style="display:block" type="number" class="attribute-field grapple-field" readonly v-bind:value="grapple.sizeModifier">
                            <label class="grapple-description">Size
                                <br>Modifier</label>
                        </div>
                        <span class="grapple-sign">+</span>
                        <div class="grapple-div">
                            <input style="display:block" type="number" class="attribute-field grapple-field" v-bind:class="{ attention: grapple.miscModifier > 0 }" v-model.number="grapple.miscModifier">
                            <label class="grapple-description">Misc
                                <br>Modifier</label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>