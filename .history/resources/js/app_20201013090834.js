require('./bootstrap');
window.Vue = require('vue');
Vue.component('democomponent', require('./components/demoComponent.vue').default);

Vue.component('helloworld', require('./components/myComponent.vue').default);

Vue.component('first-computed', require('./components/computed.vue').default);
const computed = new Vue({
  el: '#computed',
});
