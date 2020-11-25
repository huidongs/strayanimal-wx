// pages/tabbar/tabbar.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // userInfo : {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },
 /* 我的收藏点击事件 */
onMyCollection:function(){
  wx.showModal({
    title: '我的收藏',
    content:  "收藏功能暂未开放 :(",
    // success(res) {
    //   if (res.confirm) {
    //     console.log('用户点击确定')
    //   } else if (res.cancel) {
    //     console.log('用户点击取消')
    //   }
    //}
  })
},
/* 是我订单点击事件 */
  onMyOrder: function (event) {
   wx.navigateTo({
     url: 'myorders/myorders'
   })
  },
  /* 意见反馈点击事件 */
  onSuggestion: function () {
    wx.showModal({
      title: '意见反馈',
      content: "意见反馈功能暂未开放 :(",
      // success(res) {
      //   if (res.confirm) {
      //     console.log('用户点击确定')
      //   } else if (res.cancel) {
      //     console.log('用户点击取消')
      //   }
      //}
    })
  },
  /* 联系客服点击事件 */
  onContact: function () {
    wx.showModal({
      title: '联系客服',
      content: "2804234243@qq.com",
      // success(res) {
      //   if (res.confirm) {
      //     console.log('用户点击确定')
      //   } else if (res.cancel) {
      //     console.log('用户点击取消')
      //   }
      //}
    })
  },
/*  */
  // toLogin:function(){
  //   wx.navigateTo({
  //     url: 'login/login',
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})