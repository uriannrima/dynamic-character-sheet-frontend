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
        saleProducts: state => {
            return state.items.map(item => {
                return {
                    name: "**" + item.name,
                    price: item.price / 2
                }
            });
        }
    },
    /** Mutations that change SYNCHRONOUSLY the store */
    mutations: {
        reducePrice: (state, payload) => {
            state.items.forEach(item => {
                item.price -= payload;
            })
        }
    },
    /** 
     * Actions that call mutations ASYNCHRONOUSLY. 
     * Is considered good practice to use Actions "instead" of Pure Mutations.
    */
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(() => {
                // Param => mutation name.
                context.commit('reducePrice', payload);
            }, 3000);
        }
    }
});