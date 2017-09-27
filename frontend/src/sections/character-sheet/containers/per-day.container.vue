<script>
import SpellPerDayComponent from '../components/spell-per-day.component';
export default {
    props: ['character'],
    components: { SpellPerDayComponent }
}
</script>
<template>
    <div class="daily-spells-container">
        <table class="daily-spells-table">
            <thead>
                <tr>
                    <th>
                        <span class="spells-known">Spells<br>Known</span>
                    </th>
                    <th>
                        <span class="spell-save-dc">Spell<br>Save DC</span>
                    </th>
                    <th>
                        <span class="spell-level">Level</span>
                    </th>
                    <th>
                        <span class="spells-per-day">Spells<br>Per Day</span>
                    </th>
                    <th>
                        <span class="bonus-spells">Bonus<br>Spells</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <spell-per-day-component v-for="(perDay, index) in character.spellPerDayList" :key="perDay.spellLevel" :knownSpells="character.spellLists[index].spells.length"
                    :spellLevel="perDay.spellLevel" :spellsPerDay.sync="perDay.spellsPerDay" :bonusSpells.sync="perDay.bonusSpells"
                    :casterAbility="character.getCasterAbility()"></spell-per-day-component>
            </tbody>
        </table>
    </div>
</template>