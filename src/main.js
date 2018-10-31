import '@babel/polyfill'
import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import people from "./assets/people";
import Vuelidate from "vuelidate"

Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  people,
  render: h => h(App)
}).$mount("#app");
