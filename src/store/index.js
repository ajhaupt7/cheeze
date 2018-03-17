import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import { INITIAL_COLORS } from '../constants';

Vue.use(Vuex);

const state = {
  colors: INITIAL_COLORS,
  moves: [],
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
