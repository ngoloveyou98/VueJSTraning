require('./bootstrap');
window.Vue = require('vue');
Vue.component('democomponent', require('./components/demo.vue').default);
const app = new Vue({
  el: '#app',
});
Vue.component('helloworld', require('./components/myComponent.vue').default);
const hello = new Vue({
  el: '#hello',
});
Vue.component('condition', require('./components/ConditionalRendering.vue').default);
const condition = new Vue({
  el: '#conditional',
});
Vue.component('list-rendering', require('./components/ListRendering.vue').default);
const list = new Vue({
  el: '#list',
});
Vue.component('user-dashboard', require('./components/UserDashboard.vue').default);
const user = new Vue({
  el: '#use',
});
