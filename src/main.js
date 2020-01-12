import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import $ from "jquery"
/*请求导入*/
import {get, getp, postp, post} from '../src/config/http.js';

// 使用路由守卫对router全局权限拦截,
import './config/guard'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false;
/*http 请求 */
Vue.prototype.hget = get;
Vue.prototype.hgetp = getp;
Vue.prototype.hpost = post;
Vue.prototype.hpostp = postp;
/*主机地址*/
Vue.prototype.host = "";
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
