<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <h3>通用管理</h3>
        <el-menu-item v-for="item in noChildren" :key="item.name" v-bind:index="item.name" @click="clickMenu(item)">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.path" :index="subItem.path">
                <el-menu-item :index="subItem.path" @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100vh;

    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400px;

    }
}
</style>
<script>
export default {
    data() {
        return {
            isCollapse: false,
            menuData: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 'smoking',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'mall',
                    label: '商品管理',
                    icon: 'thumb',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'loading',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其他',
                    icon: 'location',
                    children: [
                        {
                            path: '/page1',
                            name: 'page1',
                            label: '页面1',
                            icon: 'setting',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/page2',
                            name: 'page2',
                            label: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        //点击菜单实现跳转 根据数据才能实现跳转
        clickMenu(item) {
            // 当页面的路由与当前路由不一致才跳转
            if (this.$route.path !== item.path && !(this.$route === '/home' && item.path === '/')) {//this.$route表示当前路由
                this.$router.push(item.path)
            }
        }
    },
    computed: { // 对数据进行过滤 分为两组 一组是有子菜单 一组是没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children) // 判断item是否有children（子菜单）
        },
        hasChildren() {
            return this.menuData.filter(item => item.children)
        }
    }
}
</script>