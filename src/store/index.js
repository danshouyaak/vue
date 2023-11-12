import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";
Vue.use(Vuex) // 全局注入Vuex

//创建Vuex的实例
export default new Vuex.Store({
    modules:{    
        tab
    }
})
