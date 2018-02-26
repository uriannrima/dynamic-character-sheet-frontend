import Vue from 'vue';
import Vuex from 'vuex';
import SheetModule from './sheet.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sheet: SheetModule
  }
});
