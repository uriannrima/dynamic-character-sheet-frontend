import CharacterMixin from 'store/mixins/character.mixin'

export default {
  mixins: [CharacterMixin],
  methods: {
    getKeyAbility (abilityName) {
      return this.character.abilityScores.find(ability => ability.name === abilityName)
    }
  }
}
