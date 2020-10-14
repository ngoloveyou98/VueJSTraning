require('./bootstrap');
window.Vue = require('vue');
Vue.component('democomponent', require('./components/demoComponent.vue').default);
const app = new Vue({
  el: '#app',
});
Vue.component('helloworld', require('./components/myComponent.vue').default);
const app = new Vue({
  el: '#hello',
});
