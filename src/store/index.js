import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    naam: "",
    id: ""
  },
  mutations: {
    setAccount(state, account) {
      state.naam = account.naam;
      if (account != null) {
        localStorage.setItem("naam", account.naam);
        localStorage.setItem("id", account._id);
      }
    },
    setNaam(state, naam) {
      state.naam = naam;
    }
  },
  actions: {
    setNaam({ commit }, naam) {
      axios
        .put(`http://192.168.43.97:3000/account`, { naam: naam })
        .then(response => {
          console.log(response);
          commit("setAccount", response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  modules: {}
});
