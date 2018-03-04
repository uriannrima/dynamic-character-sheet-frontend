<template>
  <span class="spell"
        :class="spellSchool"
        @click="onSelect(spell)"
        v-on:tap="onSelect(spell)">
    {{spell.name}}</span>
</template>

<script>
import OnSelectedMixin from '@Shared/mixins/methods/on.selected.mixin';

export default {
  mixins: [OnSelectedMixin],
  props: ['spell'],
  computed: {
    spellSchool: function () {
      return 'spell-' + this.spell.school.name.toLowerCase().replace(' ', '-');
    }
  }
}
</script>

<style>
.spell {
  display: inline-block;
  border-radius: 0.5em;
  padding: 0px 2px;
  border: solid 1px black;
  margin: 1px;
}

.spell-abjuration {
  background-color: rgba(242, 255, 0, 0.4);
}

.spell-conjuration {
  background-color: rgba(71, 252, 0, 0.4);
}

.spell-divination {
  background-color: rgba(255, 0, 140, 0.4);
}

.spell-enchantment {
  background-color: rgba(17, 0, 255, 0.4);
  color: white;
}

.spell-transmutation {
  background-color: rgba(255, 145, 0, 0.4);
}

.spell-evocation {
  background-color: rgba(255, 0, 0, 0.4);
}

.spell-necromancy {
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
}

.spell-universal {
  background-color: rgba(252, 252, 252, 0.4);
}

.spell-illusion {
  background-color: rgba(0, 255, 149, 0.4);
}
</style>
