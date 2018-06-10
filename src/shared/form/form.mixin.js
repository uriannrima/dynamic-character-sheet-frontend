import { FormBus } from 'shared/form/'

/**
 *
 * Mixin to avoid duplicate form code.
 * It creates an data, clear method, created and destroyed methods.
 *
 */
export default {
  props: ['model', 'describe'],
  inject: {
    $validator: '$validator'
  },
  created: function () {
    FormBus.$on(this.modelName + ':clear', () => {
      this.clear()
    })
  },
  destroyed: function () {
    FormBus.$off(this.modelName + ':clear')
  }
}
