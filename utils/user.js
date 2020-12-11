/**
 * 用户相关服务
 */
const util = require('../utils/util.js');
const api = require('../config/api.js');


/**
 * Promise封装wx.checkSession
 */
function checkSession() {
  return new Promise(function (resolve, reject) {
    wx.checkSession({
      success: function () {
        resolve(true);
      },
      fail: function () {
        reject(false);
      }
    })
  });
}

/**
 * Promise封装wx.login
 */
function login() {
  return new Promise(function (resolve, reject) {
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log("login ==> resolve")
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function (err) {
        reject(err);
      }
    });
  });
}

/**
 * 调用微信登录
 */
function loginByWeixin(userInfo) {
  console.log("========传入loginByWeixin的userInfo=============")
  console.log(userInfo)
  return new Promise(function (resolve, reject) {
    return login().then((res) => {
      //登录远程服务器
      util.request(api.AuthLoginByWeixin, {
        code: res.code,
        avatarUrl: userInfo.avatarUrl,
        nickname: userInfo.nickName
      }, 'POST').then((res) => {
        if (res.errno===0) {
          //存储用户信息
          console.log("这里是服务器返回的数据:")
          console.log(res)
          wx.setStorageSync('userInfo', res.data.userInfo);
          wx.setStorageSync('token', res.data.token.token);
          resolve(res);
        } else {
          console.log("进入了reject-1，代表获取后台信息失败:")
          reject(res);
        }
      }).catch((err) => {
        console.log("进入了reject-2,// 处理前一个回调函数运行时发生的错误")
        reject(err);
      });
    }).catch((err) => {
      console.log("进入了reject-3，// 处理前一个回调函数运行时发生的错误")
      reject(err);
    })
  });
}

/**
 * 判断用户是否登录
 */
function checkLogin() {
  return new Promise(function (resolve, reject) {
    //这里的逻辑是，判断是否有用户信息，若无则false，若有再判断是否有session，若有则true，若无则false
    if (wx.getStorageSync('userInfo') && wx.getStorageSync('token')) {
      checkSession().then(() => {
        console.log("进入了checkLogin的resolve，获取缓存中session成功")
        resolve(true);
      }).catch(() => {
        console.log("进入了checkLogin的reject，获取缓存中session失败")
        reject(false);
      });
    } else {
      console.log("进入了checkLogin的reject，未登录，将进行登录操作")
      reject(false);
    }
  });
}

module.exports = {
  loginByWeixin,
  checkLogin,
};