/*
 * @Description: 
 * @Autor: anlythree
 * @Date: 2020-11-21 13:09:24
 * @LastEditors: anlythree
 * @LastEditTime: 2020-11-30 17:40:41
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Col, Row, Cell, CellGroup, PullRefresh } from 'vant';
import axios from 'axios';

Vue.use(Col);
Vue.use(Row);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(PullRefresh);

Vue.prototype.$axios = axios; // ajax 方法
Vue.config.productionTip = false



new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
