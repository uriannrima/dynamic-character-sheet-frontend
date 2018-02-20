<script>
export default {
  props: ['classSkill', 'untrained', 'name', 'hasSubValue',
    'subValue', 'armorCheckPenalty', 'keyAbility',
    'rank', 'miscModifier'],
  data: function() {
    return {

    };
  },
  computed: {
    getTotal: function() {
      var rankValue = this.classSkill ? this.rank : Math.floor(this.rank / 2);
      return this.keyAbility.getTempModifier() + rankValue + this.miscModifier;
    }
  }
};
</script>
<template>
    <tr>
        <td>
            <input type="checkbox" class="class-skill-input" :checked="classSkill" @change="$emit('update:classSkill', $event.target.checked)">
            <span class="skill-name" :class="{ 'untrained-skill': untrained }" @click="$emit('onSkillSelected', $event)">{{name}}</span>
            <div class="subvalue-container" v-if="hasSubValue || subValue" style="display: inline;">
                <input type="text" class="skill-subvalue" :value="subValue" @input="$emit('update:subValue', $event.target.value)">
            </div>
        </td>
        <td>
            <span class="skill-key-ability" :class="{ 'armor-check-penalty': armorCheckPenalty }">{{keyAbility.name.substr(0,3)}}</span>
        </td>
        <td>
            <input type="number" value="0" class="skill-modifier-input" readonly :value="getTotal">
        </td>
        <td>
            <input type="number" value="0" class="skill-under-input" readonly :value="keyAbility.getTempModifier()">
        </td>
        <td>
            <input type="number" value="0" class="skill-under-input" :value="rank" @input="$emit('update:rank', $event.target.value * 1)">
        </td>
        <td>
            <input type="number" value="0" class="skill-under-input" :value="miscModifier" @input="$emit('update:miscModifier', $event.target.value * 1)">
        </td>
    </tr>
</template>