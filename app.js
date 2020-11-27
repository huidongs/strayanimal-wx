//app.js
var user = require('utils/user.js');
App({


  onLaunch: function () {
    var that = this
    // 展示本地存储能力
   
    /* 获取动物信息 */
    // wx.request({
    //   url: 'https://www.xhuidong.cn/AnimalServlet',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     that.globalData.animalsData = res.data
    //   }
    // })
    /* 获取订单信息 */
    // wx.request({
    //   url: 'https://www.xhuidong.cn/OrderServlet',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     that.globalData.ordersData = res.data
    //   }
    // })

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  onShow: function (options) {
    user.checkLogin().then(res => {
      this.globalData.hasLogin = true;
    }).catch(() => {
      this.globalData.hasLogin = false;
    });
  },

  globalData: {
    hasLogin: false,
    userInfo: null,
    imagesBase: "http://localhost:8080/strayanimal/",
    animalsData: null,
    ordersData: null
    // g_isPlayingMusic: false,
    // localhost:"192.168.0.101:8080",
  }
})