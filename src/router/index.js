import Vue from 'vue'
import VueRouter from 'vue-router'
//新闻首页
import News_Home from '../views/News/User/News Home/News_Home'
//用户登录
import Login from '../views/News/User/Login'
//新闻详情页面
// import News_Information from '../views/News/User/News_Information/News_Information.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/News_Home',
        name: 'News_Home',
        component: News_Home
    },
    /*  {
          path: '/about',
          name: 'about',
          component: () => import(/!* webpackChunkName: "about" *!/ '../views/News/User/About.vue')
      }
      ,*/
    {
        path: '/News_Information',
        name: 'News_Information',
        component: () => import('../views/News/User/News_Information/News_information')
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
