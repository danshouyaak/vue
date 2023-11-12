// 用来管理菜单相关数据

export default {
    // 定义数据
    state: {
        isCollapse: false  // 用于控制菜单的展开还是收起
    },
    mutations: { // 修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}