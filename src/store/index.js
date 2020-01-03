import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    naam: "",
    id: "",
    sheet: [],
    api_ip: "https://buivrapi.herokuapp.com"
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
    },
    setSheet(state, sheet) {
      if (!state.sheet.some(el => el.id === sheet.id)) {
        state.sheet.push(sheet);
      } else {
        let index = state.sheet.findIndex(item => item.id == sheet.id);
        state.sheet[index].visible = sheet.visible;
      }
    }
  },
  actions: {
    setNaam({ commit }, naam) {
      axios
        .put(`${this.state.api_ip}/account`, { naam: naam })
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
