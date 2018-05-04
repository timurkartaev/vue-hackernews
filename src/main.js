import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import App from './App.vue'

Vue.use(VueResource);
Vue.use(VueRouter);

export const eventBus = new Vue();

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
