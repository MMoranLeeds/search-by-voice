import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMask from 'v-mask'
import VTooltip from 'v-tooltip'
import Toasted from 'vue-toasted';
import VueFlags from "@growthbunker/vueflags";
import VueWebSpeech from 'vue-web-speech'


Vue.config.productionTip = false

Vue.use(VTooltip)
Vue.use(VueMask);
Vue.use(Toasted);
Vue.use(VueFlags);
Vue.use(VueWebSpeech)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
