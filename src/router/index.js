import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
Vue.use(VueRouter)
// 1.创建路由组件
// 2.将路由和组件进行映射
// 3.创建router实例
const routes = [
    {
        path: '/',   // 主路由
        component: Main,
        redirect:'/home', // 重定向
        children: [ // children里面的是嵌套路由（子路由）
            { path: 'home', component: Home }, // 首页
            { path: 'user', component: User },
            { path: 'mall', component: Mall },
            { path: 'page1', component: PageOne }, // 页面1
            { path: 'page2', component: PageTwo }

        ]
    }

]
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
export default router
