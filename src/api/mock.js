import Mock from "mockjs"
import homeAPi from './mockServeData/home'
import user from './mockServeData/user'
import permission from "./mockServeData/permission" 

// 首页
Mock.mock('/api/home/getData', homeAPi.getStatisticalData)

// 用户列表
Mock.mock('/api/user/add','post', user.createUser)
Mock.mock('/api/user/edit','post', user.updateUser)
Mock.mock('/api/user/del', 'post',user.deleteUser)
Mock.mock(/api\/user\/getUser/, user.getUserList)
Mock.mock(/api\/permission\/getMenu/,'post', permission.getMenu)

