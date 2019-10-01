import Vue from 'vue';
import Vuex from 'vuex';
import UpdateContent from './static/updates.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    update_meta: UpdateContent.updates
  },
  mutations: {

  },
  actions: {

  }
})
