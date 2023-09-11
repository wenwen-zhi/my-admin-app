import Vue from 'vue'
import App from './App.vue'
// import { Row, Button } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import './api/mock'
import Cookie from 'js-cookie'

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(Row);
// Vue.use(Button);

// 添加一个全局前置导航守卫
router.beforeEach((to, from, next) => {
  const token = Cookie.get('token')
  if (!token&&to.name!=='login') {
    next({ name: 'login' })
  } else if(token &&to.name==='login') {
    next({ name: 'home' })
  }
  else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
