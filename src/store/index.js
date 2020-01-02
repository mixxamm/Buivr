import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    naam: ""
  },
  mutations: {
    setNaam(state, naam){
      state.naam = naam;
    }
  },
  actions: {},
  modules: {}
});
