import Vue from 'vue'
import App from '@/components/App.vue'
import store from './store'
import KeenUi from 'keen-ui'

Vue.use(KeenUi)

// eslint-disable-next-line
new Vue({
  el: '#app',
  store,
  render: h => h(App, {
    props: {
      config: {}
    }
  }, []),
  data: {
  }
})
