import Vue from 'vue'
import App from './App.vue'
import vueCustomElement from 'vue-custom-element'

Vue.config.productionTip = false;
Vue.use(vueCustomElement);

Vue.customElement('demo-widget', {
  props: [
    'p1',
    'p2',
    'p3',
  ],
  data () {
    return {
      message: 'Hello vue-custom-element!'
    }
  },
  template: '<p>{{ message }}, {{ p1  }}, {{ p2 }}, {{ p3 }}</p>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
