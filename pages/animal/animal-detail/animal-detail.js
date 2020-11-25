/* 引入全局变量 */
var app = getApp();
/* -----------------------------------------我是分割线---------------------------------------- */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.postId;
    this.data.currentPostId = postId;
    var animalData = app.globalData.animalsData[postId];
    this.setData({
      animalData: animalData
    })
    console.log(animalData)
    //---------------------设置缓存-------------------------- 
    /*    var postsColleted = {
          1:true,
          2:false,
          3:true 
         } */
    //this作用域问题解决
    var postsCollected = wx.getStorageSync('posts_Collected')
    if (postsCollected) {
      var postCollected = postsCollected[postId]
      //if (postCollected) {
      this.setData({
        collected: postCollected
      })
      //}
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_Collected', postsCollected)
    }
    // if (app.globalData.g_isPlayingMusic) {
    //   this.setData({
    //     isPlayingMusic: true
    //   })
    // }
    this.monitorMusic();

  },
  /* 音乐开关点击事件 */
  onMusicTap: function (event) {
    // var isPlayingMusic = this.data.isPlayingMusic;
    // var currentPostId = this.data.currentPostId
    // var postData = postsData.postList[currentPostId]
    // if (isPlayingMusic) {
    //   wx.stopBackgroundAudio();
    //   this.setData({
    //     isPlayingMusic: false
    //   })
    // } else {
    //   wx.playBackgroundAudio({
    //     dataUrl: postData.music.url,
    //     title: postData.music.title,
    //     coverImgUrl: postData.music.coverImg
    //   })
    //   this.setData({
    //     isPlayingMusic: true
    //   })
    // }
    // console.log(isPlayingMusic);
  },
  /* 监听音乐播放和暂停 */
  monitorMusic: function (event) {
    // var that = this
    // wx.onBackgroundAudioPlay(function () {
    //   that.setData({
    //     isPlayingMusic: true
    //   })
    //   app.globalData.g_isPlayingMusic = true;
    // });
    // wx.onBackgroundAudioStop(function () {
    //   that.setData({
    //     isPlayingMusic: false
    //   })
    //   app.globalData.g_isPlayingMusic = false;
    // })
  },                                                                                                
  /* onShopingTap购买点击事件 */
  onShopTap:function(){
    wx.showModal({
      title: '您是否要为它购买粮食？',
      success(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../animal-products/animal-products',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /* onCollectionTap收藏点击事件 */
  onCollectionTap: function (event) {
    var postsCollected = wx.getStorageSync('posts_Collected');
    var postCollected = postsCollected[this.data.currentPostId];
    //取反
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    /*调用showToast  */
    this.showToast(postsCollected, postCollected);
    /* 调用showModal */
    //this.showMoadl(postsCollected, postCollected)


  },
  /* shouToast函数 */
  showToast: function (postsCollected, postCollected) {
    //更新文章是否的缓存值
    wx.setStorageSync('posts_Collected', postsCollected);
    //更新数据绑定变量，从而切换实现切换图片
    this.setData({
      collected: postCollected
    })
    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功', 
      duration: 1000,
      icon: "success"
    })
  },
  /* shouMoadl函数 */
  showMoadl: function (postsCollected, postCollected) {
    var _this = this;
    wx.showModal({
      title: '收藏',
      content: postCollected ? '收藏该文章？' : '取消收藏该文章？',
      showCancel: true,
      cancelText: "取消",
      cancelColor: "#333",
      confirmText: "确定",
      confirmColor: "#405f80",
      success: function (res) {
        if (res.confirm) {
          wx.setStorageSync('posts_Collected', postsCollected)
          //更新数据绑定变量，从而切换实现切换图片
          _this.setData({
            collected: postCollected
          })
        }
      }
    })
  },
  /* onShareTap分享点击事件 */
  onShareTap: function (event) {
    var itemList = ['分享到微信', '分享到QQ', '分享到微博'];
    wx.showActionSheet({
      itemList: itemList,
      success(res) {
        wx.showModal({
          title: '用户' + itemList[res.tapIndex],
          content: '用户是否取消？' + res.errMsg + "分享功能暂未开放 :(",
          // success(res) {
          //   if (res.confirm) {
          //     console.log('用户点击确定')
          //   } else if (res.cancel) {
          //     console.log('用户点击取消')
          //   }
          //}
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})