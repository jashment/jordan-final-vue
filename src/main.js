import '@babel/polyfill'
import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import people from "./assets/people";
import Vuelidate from "vuelidate"
import axios from 'axios'

Vue.use(Vuelidate)
Vue.directive('box-shadow', {
  bind(el, binding){
    let blur = 0
    if(binding.modifiers['blur']) {
      blur = 5
    }
    if (binding.arg === 'offset') {
      el.style.boxShadow = '0px ${binding.value}px ${blur}px #666'
    }else{
    el.style.boxShadow = '0px 3px 5px #666'
    }
  }
})

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://swapi.co/api"

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
  people,
  render: h => h(App)
}).$mount("#app");
