<template>
  <div class="grapple-component">
    <div class="black-box grapple-box">
      <label>Grapple</label>
      <label>Modifier</label>
    </div>
    <input type="text"
           class="common-input bab-input"
           readonly
           :value="grappleTotal">
    <input type="text"
           class="common-input bab-input"
           readonly
           :value="baseAttackBonus">
    <input type="number"
           class="common-input"
           readonly
           :value="keyScoreModifier">
    <input type="number"
           class="common-input"
           readonly
           :value="sizeBonus">
    <input type="number"
           class="common-input"
           :value="miscModifier"
           @change="$emit('onUpdateGrapple', { miscModifier: $event.target.value * 1 })">
    <span class="h-md-down">&nbsp;</span>
    <span class="total-label"
          :value="grappleTotal">Total</span>
    <span>Base Attack<br>Bonus</span>
    <span>{{keyScoreName}}<br>Modifier</span>
    <span>Size<br>Modifier</span>
    <span>Misc<br>Modifier</span>
  </div>
</template>

<script>
export default {
  props: {
    keyScoreName: {
      type: String,
      default: 'strength'
    },
    keyScoreModifier: {
      type: Number,
      default: 0
    },
    sizeBonus: {
      type: Number,
      default: 0
    },
    baseAttackBonus: {
      type: String,
      default: '0'
    },
    miscModifier: {
      type: Number,
      default: 0
    },
    grappleTotal: {
      type: String,
      default: '0'
    }
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
