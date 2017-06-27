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
    props: ['character']
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
                        <input type="number" class="attribute-field" v-model.number="character.baseAttackBonus">
                    </td>
                    <th>
                        <span>Spell Resistance</span>
                    </th>
                    <td>
                        <input type="text" class="attribute-field" :value="character.spellResistance">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
