<template>
  <div class="grapple-component">
    <div class="black-box grapple-box">
      <label>Grapple</label>
      <label>Modifier</label>
    </div>
    <input type="text"
           class="common-input bab-input"
           readonly
           :value="getGrappleTotal">
    <input type="text"
           class="common-input bab-input"
           readonly
           :value="getBaseAttackBonus">
    <input type="number"
           class="common-input"
           readonly
           :value="keyScoreModifier">
    <input type="number"
           class="common-input"
           readonly
           :value="size.grappleBonus">
    <input type="number"
           class="common-input"
           v-model.number="grapple.miscModifier">
    <span class="h-md-down">&nbsp;</span>
    <span class="total-label"
          :value="getGrappleTotal">Total</span>
    <span>Base Attack<br>Bonus</span>
    <span>{{keyScoreName}}<br>Modifier</span>
    <span>Size<br>Modifier</span>
    <span>Misc<br>Modifier</span>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'store/CharacterModule';

export default {
  props: ['keyScoreName', 'keyScoreModifier'],
  computed: {
    ...mapState(['grapple', 'size']),
    ...mapGetters(['getBaseAttackBonus', 'getGrappleTotal'])
  }
}
</script>

<style>
.grapple-component {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto 25%;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  align-items: center;
  justify-items: center;
}

.grapple-box {
  grid-column-end: span 5;
}

.grapple-component span {
  font-size: 50%;
  line-height: 8px;
  text-transform: uppercase;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .grapple-box {
    grid-column-end: initial;
  }

  .grapple-component {
    grid-column-gap: 10px;
    grid-template-columns: 30% repeat(5, 1fr);
  }
}
</style>
