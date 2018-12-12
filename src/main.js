import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import i18n from './lang'
import IconFont from './components/icon-font/index.vue'
import './styles/index.scss'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component('icon-font', IconFont);

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {App},
  template: '<App/>'
});
