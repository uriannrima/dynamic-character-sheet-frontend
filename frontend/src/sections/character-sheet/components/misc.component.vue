<script>
export default {
    props: ['armorClass'],
    computed: {
        getTouchArmor: function () {
            return parseInt(this.armorClass.base + this.armorClass.dexModifier * 1);
        },
        getFlatFooted: function () {
            var result = 0;
            for (var key in this.armorClass) {
                if (key === "dexModifier") continue;
                result += parseInt(this.armorClass[key]);
            }
            return result;
        }
    }
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
                        <input type="text" class="attribute-field" v-bind:value="getTouchArmor">
                    </td>
                    <th>
                        <div>
                            <span>Flat-Footed</span>
                            <small>Armor Class</small>
                        </div>
                    </th>
                    <td>
                        <input type="text" class="attribute-field" v-bind:value="getFlatFooted">
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
                            <input type="text" class="attribute-field initiative-input">
                        </div>
                        <span>=</span>
                        <div class="initiative-div">
                            <span class="initiative-description">Dex
                            </span>
                            <input type="text" class="attribute-field initiative-input">
                        </div>
                        <span>+</span>
                        <div class="initiative-div">
                            <span class="initiative-description">Misc
                            </span>
                            <input type="text" class="attribute-field initiative-input">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>