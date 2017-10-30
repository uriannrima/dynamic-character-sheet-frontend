import Vue from 'vue';
import { Actions } from "Store";

/**
 * Update simple values inside the store using onchange event.
 * It's not perfect, but useful atm.
 */
Vue.directive('dcs-model', {
    bind: function (el, binding, vnode, oldNode) {
        var { expression } = binding;
        el.addEventListener('change', function (event) {
            var value = event.target.value;
            if (event.target._vOptions) value = event.target._vOptions[event.target.selectedIndex];
            vnode.context.$store.commit(Actions.Simple, { expression, value });
        })
    }
});
