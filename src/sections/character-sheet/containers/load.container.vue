<script>
export default {
  props: ['carryCapacity']
}
</script>
<template>
    <div class="load-container">
        <div>
            <div>
                <input type="number" class="full-input" v-model.number="carryCapacity.lightLoad">
                <span class="load-span">Light<br>Load</span>
            </div>
            <div>
                <input type="number" class="full-input" v-model.number="carryCapacity.mediumLoad">
                <span class="load-span">Medium<br>Load</span>
            </div>
            <div>
                <input type="number" class="full-input" v-model.number="carryCapacity.heavyLoad">
                <span class="load-span">Heavy<br>Load</span>
            </div>
            <div>
                <input type="number" class="full-input" v-model.number="carryCapacity.liftOverHead">
                <span class="load-span">Lift Over<br>Head</span>
                <span class="load-span-sm">Equals<br>Max Load</span>
            </div>
            <div>
                <input type="number" class="full-input" v-model.number="carryCapacity.liftOffGround">
                <span class="load-span">Lift Off<br>Ground</span>
                <span class="load-span-sm">2 x<br>Max Load</span>
            </div>
            <div>
                <input type="number" class="full-input" v-model.number="carryCapacity.pushOrDrag">
                <span class="load-span">Push or<br>Drag</span>
                <span class="load-span-sm">5 x<br>Max Load</span>
            </div>
        </div>
    </div>
</template>