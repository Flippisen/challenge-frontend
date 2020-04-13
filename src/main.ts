import Vue from 'vue';
// eslint-disable-next-line
// @ts-ignore
import VueMaterial from 'vue-material';
import Vuelidate from 'vuelidate';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import i18n from './i18n';

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
