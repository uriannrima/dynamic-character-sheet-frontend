<template>
    <div class="possessions-component">
        <div class="black-box">
            <label>Other Possessions</label>
        </div>
        <div class="possession-column" v-for="(c, column) in 2" :key="column">
            <div class="possesion-component column-header" v-show="column == 0">
                <label>Item</label>
                <label>Page</label>
                <label>Weight</label>
            </div>
            <possession-component v-for="(r,row) in 17" :key="row" :possession="possessions[(column * row) + row]"></possession-component>
        </div>
        <possession-component :possession="totalPossesion"></possession-component>
    </div>
</template>

<script>
import { default as PossessionComponent } from "./possession.component.vue";

export default {
    components: { PossessionComponent },
    props: ["possessions"],
    computed: {
        totalPossesion: {
            get() {
                return {
                    isTotal: true,
                    weight: this.possessions.reduce((acc, possession) => acc + possession.weight, 0).toPrecision(3)
                };
            }
        }
    }
}
</script>

<style>
.possessions-component {
  display: grid;
  grid-template-rows: 1fr;
}

.column-header {
  text-align: center;
}
.column-header label {
  border: solid 1px black;
}
</style>
