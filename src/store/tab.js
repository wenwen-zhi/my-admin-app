import { FormItem } from "element-ui"
import Cookie from "js-cookie"
export default {
    state: {
        isCollapse: false,
        // 面包屑内容
        tabsList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            }
        ],
        menu:[]
    },
    mutations: {
        // 修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val) {
            if (val.name !== 'home') {
                const index = state.tabsList.findIndex(item => item.name === val.name)
                if (index === -1) {
                    state.tabsList.push(val)
                }
            }
        },
        //删除指定的Tag数据
        closeTag(state,item) {
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index, 1)
        },
        // 设置menu的数据
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        // 动态注册路由
        addMenu(state, router) { 
            if (! Cookie.get('menu')) return
        }
    }
}