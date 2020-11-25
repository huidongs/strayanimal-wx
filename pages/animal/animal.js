/* 引入数据文件 */
// var postsdata = require("../../data/posts-data")
var app = getApp();
/* -----------------------------------------我是分割线---------------------------------------- */
Page({

  /**
   * 页面的初始数据
   */

  data: {
   
  },


  /** 
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      posts_key: app.globalData.animalsData,
      
    })
    console.log(this.data.posts_key)
    


  },
  /* detail点击事件函数 */
  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    //实现跳转，可以返回，所以用wx.navigateTo
    wx.navigateTo({
      url: 'animal-detail/animal-detail?postId=' + postId,
    })
  },
  /* 获取焦点 */
  onBindFocus: function(event) {
    // this.setData({
    //   containerShow: false,
    //   searchPanelShow: true
    // })
  },
  /* 获取input中输入文本 */
  onBindConfirm: function(event) {
    var postId = event.detail.value;
    wx.navigateTo({
      url: 'animal-detail/animal-detail?postId=' + postId,
    })
  },
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