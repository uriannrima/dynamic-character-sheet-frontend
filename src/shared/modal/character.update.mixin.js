import ModelUtils from 'utils/model.utils';

/**
 *
 * Mixin to update character array using Model Utils.
 * Component must have an "character" object in its data and a arrayName defined,
 * on it's instance or it's data.
 * Will generate 3 methods to automatically add, update and remove model from character object.
 * Created only to avoid code duplicate between feats, skills, special abilities, spells, etc.
 *
 *  */
export default {
  arrayName: '',
  methods: {
    addToCharacter: function (model) {
      ModelUtils.addTo(this.character, this.arrayName, model);
    },
    removeFromCharacter: function (model) {
      ModelUtils.removeFrom(this.character, this.arrayName, model);
    },
    updateOnCharacter: function (model) {
      ModelUtils.updateOn(this.character, this.arrayName, model);
    }
  }
}
