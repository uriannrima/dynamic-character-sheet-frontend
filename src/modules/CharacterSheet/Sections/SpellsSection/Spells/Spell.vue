<template>
  <div class="spell">
    <div class="spell__action"
         v-if="false">
      <div class="spell__action__cast">
        <span>Cast</span>
      </div>
    </div>
    <div class="spell__name">
      <span> {{spell.name}} </span>
      <small>{{spell.school}}</small>
    </div>
    <span class="spell__time">{{spell.castingTime.amount}} SA</span>
    <div class="spell__range">
      <span>{{spell.range[0].type}}</span>
      <small v-if="spell.range[0].distance">{{spell.range[0].distance + (spell.range[0].scale ? ((characterLevel / spell.range[0].scale.per) * spell.range[0].scale.value) : 0)}} ft.</small>
      <small v-if="spell.range[0].area">{{spell.range[0].area.size}} ft. {{spell.range[0].area.type}}</small>
    </div>
    <div v-if="!spell.hit"
         class="spell__dchit">
      <span class="spell__dchit__modifier"
            v-if="spell.savingThrow.keyAbility !== 'None'">{{10 + spell.level + abilityScores.intelligence.modifier | signed }}</span>
      <small class="spell__dchit__saving-throw">{{spell.savingThrow.keyAbility}}</small>
      <small class="spell__dchit__resolve">{{spell.savingThrow.resolve}}</small>
    </div>
    <div v-else
         class="spell__dchit">
      <span class="spell__dchit__modifier">{{baseAttackBonus + abilityScores[spell.hit.keyAbility].modifier | signed }}</span>
      <small class="spell__dchit__saving-throw">{{spell.hit.type}}</small>
    </div>
    <div class="spell__effects">
      <div v-for="(effect, index) in spell.effects"
           :key="index">
        <span v-if="effect.damage">{{characterLevel / effect.scale.per}}{{effect.damage}}</span>
        <span v-else>{{effect}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    spell: {
      type: Object,
      required: true
    },
    abilityScores: {
      type: Object,
      required: true
    },
    characterLevel: {
      type: Number,
      default: 1
    },
    baseAttackBonus: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
</style>
