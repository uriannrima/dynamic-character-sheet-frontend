<script>
import ItemGridContainer from './item-grid.container';
import LoadContainer from './load.container';
import MoneyContainer from './money.container';

export default {
  props: [
    'possessions',
    'carryCapacity',
    'money'],
  components: { ItemGridContainer, LoadContainer, MoneyContainer }
}
</script>
<template>
    <div>
        <div class="possessions-container">
            <div class="possessions-header black-box">
                <span class="health-points-abbreviation">Other Possessions</span>
            </div>
            <item-grid-container :items="possessions"></item-grid-container>
            <load-container :carryCapacity="carryCapacity"></load-container>
            <money-container :money="money"></money-container>
        </div>
    </div>
</template>