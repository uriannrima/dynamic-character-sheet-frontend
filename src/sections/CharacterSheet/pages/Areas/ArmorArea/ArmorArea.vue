<template>
  <div class="armor-area">
    <div class="health-speed-wrapper">
      <health></health>
      <speed></speed>
    </div>
    <primary-armor :keyScoreName="keyScore.name"
                   :keyScoreModifier="getTempModifier(keyScore)"></primary-armor>
  </div>
</template>

<script>
import { Health, Speed, PrimaryArmor } from './';
import { mapState, mapGetters } from 'store/CharacterModule';

export default {
  components: { Health, Speed, PrimaryArmor },
  computed: {
    ...mapState(['keyAbilityScores']),
    ...mapGetters(['getAbilityScore', 'getTempModifier']),
    keyScore() {
      return this.getAbilityScore(this.keyAbilityScores.armor);
    }
  }
}
</script>

<style>
.armor-area {
  grid-area: armor-area;
}

.armor-area > div:nth-child(2) {
  margin-top: 1px;
}

.grid {
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
}

.last-input {
  justify-self: end;
  width: 95% !important;
}

.health-speed-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2px;
}

@media screen and (min-width: 1024px) {
  .armor-area {
    padding: 0 5px;
  }

  .health-speed-wrapper {
    grid-template-columns: 87% 13%;
  }
}
</style>
