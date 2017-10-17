import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // Won't allow change outside of the store, only inside a mutation method.
    strict: true,
    /** Store State Definition */
    state: {
        items: [
            {
                name: "Item 1",
                price: 10
            },
            {
                name: "Item 2",
                price: 11
            },
            {
                name: "Item 3",
                price: 13
            }
        ]
    },
    /** Computed Getter from the Store */
    getters: {
        items: state => {
            return state.items;
        },
        // Get items from parameter, which is "state".
        saleProducts: ({ items }) => {
            return items.map(item => {
                return {
                    name: "**" + item.name,
                    price: item.price / 2
                }
            });
        }
    },
    /** Mutations that change SYNCHRONOUSLY the store */
    mutations: {
        // Using deconstruction as example.
        reducePrice: ({ items }, { amount }) => {
            items.forEach(item => {
                item.price -= amount;
            })
        }
    },
    /** 
     * Actions that call mutations ASYNCHRONOUSLY. 
     * Is considered good practice to use Actions "instead" of Pure Mutations.
    */
    actions: {
        // Using deconstruction as example.
        // You can get state from the context, if you need to access data from the actual state.
        // Actions may return promises, so you may "chain" them using the "dispatch" method.
        // And they may even be "async" => async reducePrice.
        reducePrice: ({ dispatch, commit, state }, payload) => {
            setTimeout(() => {
                // Param => mutation name.
                commit('reducePrice', payload);
            }, 3000);
        }
    }
});