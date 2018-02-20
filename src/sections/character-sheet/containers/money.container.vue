<script>
export default {
  props: ['money']
}
</script>
<template>
    <div class="money-container">
        <div class="money-header black-box">
            <span class="health-points-abbreviation">Money</span>
        </div>
        <div style="display: flex">
            <div class="coins-container" style="width: 50%">
                <div>
                    <span class="coin-span" title="Cooper Coins">CP —</span>
                    <input type="number" class="coin-input" v-model.number="money.copper">
                </div>
                <div>
                    <span class="coin-span" title="Silver Coins = 10 Cooper Coins">SP —</span>
                    <input type="number" class="coin-input" v-model.number="money.silver">
                </div>
                <div>
                    <span class="coin-span" title="Gold Coins = 10 Silver Coins">GP —</span>
                    <input type="number" class="coin-input" v-model.number="money.gold">
                </div>
                <div>
                    <span class="coin-span" title="Platinum Coins = 100 Gold Coins">PP —</span>
                    <input type="number" class="coin-input" v-model.number="money.platinum">
                </div>
            </div>
            <div class="treasure-container" style="width: 50%">
                <textarea class="treasure-area" v-model="money.treasure"></textarea>
            </div>
        </div>
    </div>
</template>