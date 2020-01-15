import Vue from 'vue'
import App from './App.vue'
import vueCustomElement from 'vue-custom-element'

Vue.config.productionTip = false;
Vue.use(vueCustomElement);

Vue.cunstomElement('demo-widget', {
  props: [
    'p1',
    'p2',
    'p3',
  ],
  data: {
    message: 'Hello Vue!'
  },
  template: '<p>{{ message }}, {{ prop1  }}, {{prop2}}, {{prop3}}</p>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
