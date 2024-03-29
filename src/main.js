import '@babel/polyfill'
import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate"
import axios from 'axios'
import About from './views/About.vue';



Vue.use(Vuelidate)

Vue.component('aboutInfo', About);

Vue.directive('box-shadow', {
  bind(el, binding){
    let blur = 0
    if(binding.modifiers['blur']) {
      blur = 5
    }
    if (binding.arg === 'offset') {
      el.style.boxShadow = '0px ${binding.value}px ${blur}px #666'
    }else{
    el.style.boxShadow = '0px 5px 10px #444'
    }
  }
})

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://swapi.dev/api"

const requestInterceptor = axios.interceptors.request.use(config =>{
  console.log(config)
  return config
})

const responseInterceptor = axios.interceptors.response.use(response =>{
  console.log(response)
  return response
})

axios.interceptors.request.eject(requestInterceptor)
axios.interceptors.request.eject(responseInterceptor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
