import NProgress from 'nprogress'
import router from '../router'
import Vue from 'vue'
// import storage from './storage'

NProgress.configure({showSpinner: false})

router.beforeEach((to, from, next) => {
    NProgress.start()

    let whiteList = ['/Login', '/Without', '/'] // 不进行权限判断的白名单

    // if (storage.get("whiteList") != null) {
    //     whiteList = storage.get("whiteList");
    //     console.log("获取列表");
    //     console.log(whiteList);
    // } else {
    //     whiteList = ['/Login', '/WithOut', '/']
    // }

    console.log(to.path);
    if (whiteList.includes(to.path)) {
        next()
    } else {
        next();
        // 获取localStorage中的权限链接数组
        // const localStoragePermissionLinkArr = JSON.parse(storage.get('permissionLink') || '[]')
        // if (localStoragePermissionLinkArr && localStoragePermissionLinkArr.length > 0) {
        //     if (localStoragePermissionLinkArr.includes(to.path)) {
        //         console.log('有此页面权限直接进入')
        //         console.log(to.path);
        //         next()
        //     } else {
        //         console.log('没有此权限进入无权限页面')
        //         console.log(to.path);
        //         next({ path: '/WithOut' })
        //         NProgress.done()
        //     }
        // } else {
        //     console.log('localStorage中没有权限数组permissionLink')
        //     console.log(to.path);
        //     next({ path: '/WithOut' })
        //     NProgress.done()
        // }
        console.log("页面跳转");
        NProgress.done();
    }
})

// 验证权限自定义指令 在对象插入父级元素时验证
// bind:指令的表达式对象,权限链接; el绑定指令的element,
// 例如v-permission="'/start/add'"
Vue.directive('permission', {
    inserted: function (el, bind) {
        let permissionUrl = bind.value
        let permissionArr = JSON.parse(localStorage.getItem('permissionLink') || '[]')
        if (!permissionArr.includes(permissionUrl)) {
            el.parentNode.removeChild(el)
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})

