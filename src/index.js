import 'babel-polyfill';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'prismjs';

import router from './router';
import App from './App.vue';

Vue.use(BootstrapVue);

new Vue({ // eslint-disable-line no-new
  el: 'app',
  router,
  components: { App },
});
