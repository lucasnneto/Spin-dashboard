import Vue from 'vue'
import App from './App.vue'
import Icon from "./components/Icons/index.vue";
Vue.component("icon", Icon);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
