import Vue from 'vue'
import App from './App.vue'
import MyRouter from './MyRouter'

Vue.config.productionTip = false;

Vue.use(MyRouter);

new Vue({
  render: h => h(App),
}).$mount('#app')
