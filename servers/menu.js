'use strict'
//const axios = require('./axiosTools.js');
const _urls = require('../config/api.js');

//得到菜单
function GetMenus(kw) {
    //axios.get("url").then(res=>{
    //    return res;
    //})
return [{
            id:"1",
            name:"测试菜单1"
        },{
            id:"2",
            name:"测试菜单2"
        },{
            id:"3",
            name:"测试菜单3"
        },{
            id:"4",
            name:"测试菜单4"
        }];
}


module.exports = {
    GetMenus
}