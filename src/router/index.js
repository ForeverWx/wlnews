import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {//用户登录
        path: '/Login',
        name: 'Login',
        component: resolve => require(['@/views/News/User/Login.vue'], resolve)
    },
    {
        /*首页*/
        path: '/',
        name: 'News_Home',
        component: resolve => require(['@/views/News/User/News Home/News_Home.vue'], resolve),
        children: [
            {
                /*综合页*/
                path: '/',
                name: 'Synthesize',
                component:resolve => require(['@/components/News/User/News/Types/Synthesize.vue'], resolve),
            }, {
                /*国内*/
                path: '/Inland',
                name: 'Inland',
                component: resolve => require(['@/components/News/User/News/Types/Inland.vue'], resolve)
            }, {
                /*国际*/
                path: '/International',
                name: 'International',
                component: resolve => require(['@/components/News/User/News/Types/International.vue'], resolve)
            }, {
                /*体育*/
                path: '/Sports',
                name: 'Sports',
                component: resolve => require(['@/components/News/User/News/Types/Sports.vue'], resolve)
            }, {
                /*军事*/
                path: '/Military',
                name: 'Military',
                component: resolve => require(['@/components/News/User/News/Types/Military.vue'], resolve)
            }, {
                /*娱乐*/
                path: '/Recreation',
                name: 'Recreation',
                component: resolve => require(['@/components/News/User/News/Types/Recreation.vue'], resolve)
            }, {
                /*科技*/
                path: '/Science',
                name: 'Science',
                component: resolve => require(['@/components/News/User/News/Types/Science.vue'], resolve)
            }, {
                /*历史*/
                path: '/History',
                name: 'History',
                component: resolve => require(['@/components/News/User/News/Types/History.vue'], resolve)
            }, {
                /*图片*/
                path: '/Picture',
                name: 'Picture',
                component: resolve => require(['@/components/News/User/News/Types/Picture.vue'], resolve)
            }
        ]
    }, {
        //新闻详情页面
        path: '/News_Information',
        name: 'News_Information',
        component: resolve => require(['../views/News/User/News_Information/News_information.vue'], resolve)
    }
];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
