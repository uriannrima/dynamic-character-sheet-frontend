<script>
export default {
    props: ['baseAttackBonus', 'spellResistance']
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
                        <input type="text" class="attribute-field" :value="baseAttackBonus">
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
