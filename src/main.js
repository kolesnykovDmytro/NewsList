import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from "axios";
import LazyLoadDirective from "./directives/LazyLoadDirective";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
 
Vue.use(Vuetify);
Vue.config.productionTip = false;
axios.defaults.baseURL = "https://newsapi.org/v2/top-headlines";
Vue.directive("lazyload", LazyLoadDirective);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
