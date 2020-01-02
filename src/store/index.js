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
      if(naam != null)
        localStorage.setItem('naam', naam);
    }
  },
  actions: {},
  modules: {}
});
