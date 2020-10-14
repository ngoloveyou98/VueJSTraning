require('./bootstrap');
window.Vue = require('vue');
Vue.component('demo', require('./components/demo.vue').default);
const app = new Vue({
  el: '#app',
});