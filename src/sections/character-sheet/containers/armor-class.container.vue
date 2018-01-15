<script>
export default {
    props: ['armorClass', 'abilityScoreModifier', 'armorItem', 'shieldItem', 'size', 'damageReduction'],
    computed: {
        getTotalArmor: function() {
            return 10 + this.armorItem.acBonus + this.shieldItem.acBonus + this.abilityScoreModifier.getTempModifier() + this.size.attackDCBonus + this.armorClass.naturalArmor + this.armorClass.deflectionModifier + this.armorClass.miscModifier;
        }
    }
}
</script>
<template>
    <div class="armor-container">
        <table class="armor-table">
            <tbody>
                <tr class="hidden-lg-up">
                    <td colspan="9">
                        <div class="black-box" style="width:50%; float:left">
                            <span class="health-points-abbreviation">AC</span>
                            <span class="health-points-description">Armor Class</span>
                        </div>
                        <div style="vertical-align: middle; width:50%; float:right; margin-top: 4px;">
                            <input type="number" value="10" class="health-points-field total-health-points-field" readonly :value="armorClass.getTotalArmor()">
                        </div>
                    </td>
                </tr>
                <tr>
                    <th class="hidden-md-down">
                        <div class=" black-box">
                            <span class="armor-class-abbreviation">AC</span>
                            <span class="armor-class-description">Armor Class</span>
                        </div>
                    </th>
                    <td class="hidden-md-down">
                        <input type="number" value="10" class="health-points-field" readonly :value="getTotalArmor">
                    </td>
                    <td class="hidden-md-down">
                        <span class="armor-base-value">= 10 +</span>
                    </td>
                    <td>
                        <input type="number" value="0" class="health-points-field" readonly :value="armorItem.acBonus">
                    </td>
                    <td>
                        <input type="number" value="0" class="health-points-field" readonly :value="shieldItem.acBonus">
                    </td>
                    <td>
                        <input type="number" value="0" class="health-points-field" readonly :value="abilityScoreModifier.getTempModifier()">
                    </td>
                    <td>
                        <input type="number" value="0" class="health-points-field" readonly :value="size.attackDCBonus">
                    </td>
                    <td>
                        <input type="number" value="0" class="health-points-field" v-model.number="armorClass.naturalArmor">
                    </td>
                    <td>
                        <input type="number" value="0" class="health-points-field" v-model.number="armorClass.deflectionModifier">
                    </td>
                    <td>
                        <input type="number" value="0" class="health-points-field" v-model.number="armorClass.miscModifier">
                    </td>
                    <td class="hidden-md-down" style="width:15%">
                        <input type="text" class="damage-reduction-field" v-model="damageReduction">
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th class="hidden-md-down">
                        <span>&nbsp</span>
                    </th>
                    <th class="hidden-md-down">
                        <span class="ability-score-description">Total</span>
                    </th>
                    <th class="hidden-md-down">
                        <span class="ability-score-description">&nbsp</span>
                    </th>
                    <th>
                        <span class="armor-description">Armor <br>Bonus</span>
                    </th>
                    <th>
                        <span class="armor-description">Shield <br>Bonus</span>
                    </th>
                    <th>
                        <span class="armor-description">Dex <br>Modifier</span>
                    </th>
                    <th>
                        <span class="armor-description">Size <br>Modifier</span>
                    </th>
                    <th>
                        <span class="armor-description">Natural <br>Armor</span>
                    </th>
                    <th>
                        <span class="armor-description">Deflection <br>Modifier</span>
                    </th>
                    <th>
                        <span class="armor-description">Misc <br>Modifier</span>
                    </th>
                    <th class="hidden-md-down">
                        <span class="armor-description">Damage Reduction</span>
                    </th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>