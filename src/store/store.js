import Vue from 'vue';
import Vuex from 'vuex';
import SheetModule from './sheet.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    sheet: SheetModule
  }
});
