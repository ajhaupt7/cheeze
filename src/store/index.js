import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  board: {
    colors: {
      light: '#efd9b7',
      dark: '#b48866',
    },
    threeDee: true,
  },
  moves: [],
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
