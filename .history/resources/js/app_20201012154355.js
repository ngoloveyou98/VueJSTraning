require('./bootstrap');
window.Vue = require('vue');
Vue.component('democomponent', require('./components/demo.vue').default);
const app = new Vue({
  el: '#app',
});
Vue.component('myComponent', require('./components/demoComponent.vue').default);
const app = new Vue({
  el: '#component',
});