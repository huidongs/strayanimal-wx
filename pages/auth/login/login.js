var api = require('../../../config/api.js');
var util = require('../../../utils/util.js');
var user = require('../../../utils/user.js');

var app = getApp();
Page({
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  wxLogin: function (e) {
    console.log(e)
    //这里为什么是undefined就登录失败了？
    if (e.detail.userInfo == undefined) {
      app.globalData.hasLogin = false;
      util.showErrorToast('微信登录失败-1');
      return;
    }
    user.checkLogin().catch(() => {

      user.loginByWeixin(e.detail.userInfo).then(res => {
        app.globalData.hasLogin = true;

        wx.navigateBack({
          delta: 1
        })
      }).catch((err) => {
        app.globalData.hasLogin = false;
        util.showErrorToast('微信登录失败-2');
      });
    });
  },
  accountLogin: function () {
    wx.showModal({
      title: '暂未开放',
      content: '是的，其实就是没有写:)',
    })
    // wx.navigateTo({
    //   url: "/pages/auth/accountLogin/accountLogin"
    // });
  }
})