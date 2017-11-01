import Vue from 'vue';
import Vuex from 'vuex';
import SheetModule from './sheet.module';

Vue.use(Vuex);

const snapshotPlugin = store => {
    let historyIndex = 0;
    let history = [];
    let prevState = _.cloneDeep(store.state);
    store.subscribe((mutation, state) => {
        if (mutation.type !== 'ROLLBACK') {
            history.push(prevState);
            prevState = state;
            historyIndex++;
        } else {
            store.replaceState(history[historyIndex--]);
        }
    });
}

export const store = new Vuex.Store({
    plugins: [snapshotPlugin],
    modules: {
        sheet: SheetModule
    }
});
