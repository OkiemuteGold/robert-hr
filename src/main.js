import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueMasonry from 'vue-masonry-css'
import Pagination from 'vue-pagination-2';

Vue.use(VueMasonry);
Vue.component('MyPagination', Pagination);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
