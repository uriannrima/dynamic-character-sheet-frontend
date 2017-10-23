import { FormBus } from 'Shared/forms/';

export default {
  props: ['model', 'describe'],
  inject: {
    $validator: '$validator'
  },
  created: function () {
    FormBus.$on(this.modelName + ':clear', () => {
      this.clear();
    });
  },
  destroyed: function () {
    FormBus.$off(this.modelName + ':clear');
  }
}