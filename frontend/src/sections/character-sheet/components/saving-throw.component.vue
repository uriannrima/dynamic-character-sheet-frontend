<script>
export default {
    props: ['showInputLabel', 'name', 'keyAbility', 'base', 'magicModifier', 'miscModifier', 'tempModifier'],
    computed: {
        getTotal: function() {
            return this.base + + this.keyAbility.getTempModifier() + this.magicModifier + this.miscModifier + this.tempModifier;
        }
    }
}
</script>
<template>
    <tr>
        <th class="hidden-sm-down">
            <div class="black-box">
                <span class="health-points-abbreviation">{{name}}</span>
                <span class="health-points-description">({{keyAbility.name}})</span>
            </div>
        </th>
        <td>
            <!-- Desktop -->
            <div class="saving-throw-values hidden-sm-down">
                <div>
                    <label v-if="showInputLabel" for="">Total</label>
                    <input type="number" value="0" readonly :value="getTotal">
                </div>
                <span class="saving-throw-signs">=</span>
                <div>
                    <label v-if="showInputLabel" for="">Base
                        <br>Save</label>
                    <input type="number" value="0" :value="base" @input="$emit('update:base', $event.target.value * 1)">
                </div>
                <span class="saving-throw-signs">+</span>
                <div>
                    <label v-if="showInputLabel" for="">Ability
                        <br>Modifier</label>
                    <input type="number" value="0" readonly :value="keyAbility.getTempModifier()">
                </div>
                <span class="saving-throw-signs">+</span>
                <div>
                    <label v-if="showInputLabel" for="">Magic
                        <br>Modifier</label>
                    <input type="number" value="0" :value="magicModifier" @input="$emit('update:magicModifier', $event.target.value * 1)">
                </div>
                <span class="saving-throw-signs">+</span>
                <div>
                    <label v-if="showInputLabel" for="">Misc
                        <br>Modifier</label>
                    <input type="number" value="0" :value="miscModifier" @input="$emit('update:miscModifier', $event.target.value * 1)">
                </div>
                <span class="saving-throw-signs">+</span>
                <div>
                    <label v-if="showInputLabel" for="">Temporary
                        <br>Modifier</label>
                    <input type="number" value="0" :value="tempModifier" @input="$emit('update:tempModifier', $event.target.value * 1)">
                </div>
            </div>
            <!-- Mobile -->
            <div class="hidden-sm-up">
                <div class="black-box" style="width: 100%">
                    <span class="health-points-abbreviation">{{name}}</span>
                    <span class="health-points-description">({{keyAbility.name}})</span>
                </div>
                <div class="saving-throw-values">
                    <div>
                        <label for="">Total</label>
                        <input type="number" value="0" readonly :value="getTotal">
                    </div>
                    <span class="saving-throw-signs">=</span>
                    <div>
                        <label for="">Base
                            <br>Save</label>
                        <input type="number" value="0" :value="base" @input="$emit('update:base', $event.target.value * 1)">
                    </div>
                    <span class="saving-throw-signs">+</span>
                    <div>
                        <label for="">Ability
                            <br>Modifier</label>
                        <input type="number" value="0" readonly :value="keyAbility.getTempModifier()">
                    </div>
                    <span class="saving-throw-signs">+</span>
                    <div>
                        <label for="">Magic
                            <br>Modifier</label>
                        <input type="number" value="0" :value="magicModifier" @input="$emit('update:magicModifier', $event.target.value * 1)">
                    </div>
                    <span class="saving-throw-signs">+</span>
                    <div>
                        <label for="">Misc
                            <br>Modifier</label>
                        <input type="number" value="0" :value="miscModifier" @input="$emit('update:miscModifier', $event.target.value * 1)">
                    </div>
                    <span class="saving-throw-signs">+</span>
                    <div>
                        <label for="">Temporary
                            <br>Modifier</label>
                        <input type="number" value="0" :value="tempModifier" @input="$emit('update:tempModifier', $event.target.value * 1)">
                    </div>
                </div>
            </div>
        </td>
    </tr>
</template>