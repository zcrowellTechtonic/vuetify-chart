import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Vue2TouchEvents from 'vue2-touch-events';
import LoadScript from 'vue-plugin-load-script';

Vue.use(Vue2TouchEvents);
Vue.use(Vuetify)
Vue.use(LoadScript);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
