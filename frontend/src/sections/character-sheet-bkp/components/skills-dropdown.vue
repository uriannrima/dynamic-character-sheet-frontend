<script>
export default {
    props: ['skillPoints', 'totalRanks', 'filter'],
    data: function () {
        return {
            showConfig: false
        }
    }
}
</script>

<template>
    <div class="dropdown" style="float: right;" :class="{ 'open' : showConfig }">
        <span class="glyphicon glyphicon-cog" v-on:click="showConfig = !showConfig"></span>
        <ul class="dropdown-menu dropdown-menu-right" style="min-width: 190px; text-align: center;">
            <li>
                <span>Skill Points:</span>
            </li>
            <li>
                <div>
                    <span>Total Skill Points: {{skillPoints}}</span>
                </div>
            </li>
            <li>
                <div>
                    <span>Used: {{totalRanks}}</span>
                    <span>Avaiable: {{skillPoints - totalRanks}}</span>
                </div>
            </li>
            <li role="separator" class="divider"></li>
            <li>
                <span>Filters:</span>
            </li>
            <li>
                <div>
                    <span>Hide skills with no modifier?</span>
                    <input type="checkbox" v-model="filter.hideNoBonus">
                </div>
            </li>
            <li>
                <div>
                    <span>Hide cross-class skills?</span>
                    <input type="checkbox" v-model="filter.hideCrossClass">
                </div>
            </li>
        </ul>
    </div>
</template>
