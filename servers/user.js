'use strict'
//const axios = require('./axiosTools.js');
//const _urls = require('../config/api.js');

// 用户登陆
function login(kw) {
    //1，登陆成功  保存个人信息，

    //2，存放个人的 usertoken，  以便请求的时候带参数

    return true;   //返回Ture false

}



// 用户退出
function logout() {
    //1，删除个人信息

    //2，存放个人的 usertoken，  以便请求的时候带参数

    return true;   //返回Ture false

}

module.exports = {
    login,
    logout
}