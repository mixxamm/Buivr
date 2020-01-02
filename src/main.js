import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import store from "./store";

Vue.use(VueAxios, axios);
Vue.component(VueQrcode.name, VueQrcode);
Vue.config.productionTip = false;


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");