<script>
function extract(bab) {
    var result = "";
    result += bab.toString();
    if (bab > 5) {
        result += "/" + extract(bab - 5);
    }
    return result;
}

export default {
    props: ['baseAttackBonus', 'spellResistance'],
    computed: {
        computedBab: function () {
            return extract(this.baseAttackBonus);
        }
    }
}
</script>
<template>
    <div>
        <table class="table bab-table">
            <tbody>
                <tr>
                    <th>
                        <span>Base Attack Bonus</span>
                    </th>
                    <td>
                        <input type="text" class="attribute-field" readonly :value="computedBab">
                    </td>
                    <th>
                        <span>Spell Resistance</span>
                    </th>
                    <td>
                        <input type="text" class="attribute-field" :value="spellResistance">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
