<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <common-aside /> <!-- side -->
            </el-aside>
            <el-container>
                <el-header>
                    <CommonHeader></CommonHeader>
                </el-header>
                <el-main>
                    <!-- 路由匹配到的组件将渲染在这里 -->
                    <router-view></router-view><!-- 路由出口 -->
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
export default {
    data() {
        return {}
    },
    components: {
        CommonAside,
        CommonHeader
    }
}
</script>
<style scoped>
.el-header {
    padding: 0;
}
</style>