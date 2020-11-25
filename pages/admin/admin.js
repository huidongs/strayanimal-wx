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
  onLoad: function() {

  },
  /* 我的收藏点击事件 */
  onFindAniaml: function() {

    wx.navigateTo({
      url: 'searchanimal/searchanimal'
    })
  },
  /* 是我订单点击事件 */
  onAddAnimal: function(event) {
    wx.navigateTo({
      url: 'addanimal/addanimal'
    })
    console.log('dianji')
  },
  /* 查询用户Order点击事件 */
  onUerOrder: function() {
    wx.showModal({
      title: '查询用户Order',
      content: "此功能暂未开放 :(",
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
  onContact: function() {
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