import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import store from "./store";
import VueInsProgressBar from 'vue-ins-progress-bar'
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBGmr2azbkenZMtsLdT8k13M9_NRPIeFVo",
  authDomain: "buivr-7e4fc.firebaseapp.com",
  databaseURL: "https://buivr-7e4fc.firebaseio.com",
  projectId: "buivr-7e4fc",
  storageBucket: "buivr-7e4fc.appspot.com",
  messagingSenderId: "993590564301",
  appId: "1:993590564301:web:9de78aee8525db33d2a084",
  measurementId: "G-KYXPY5D0ET"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

const options = {
  position: 'fixed',
  show: true,
  height: '3px'
}

Vue.use(VueInsProgressBar, options)
Vue.use(VueAxios, axios);
Vue.component(VueQrcode.name, VueQrcode);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
