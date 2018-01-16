<script>
export default {
    props: ['item']
}
</script>
<template>
    <div class="single-possession">
        <div class="item-header">
            <div class="item-title">
                <input type="text" class="full-input item-input" v-model="item.name">
            </div>
            <div class="item-page">
                <input type="number" class="full-input item-input" v-model.number="item.page">
            </div>
            <div class="item-weight">
                <input type="number" class="full-input item-input" v-model.number="item.weight">
            </div>
        </div>
    </div>
</template>