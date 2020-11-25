// pages/admin/addaniaml/addanimal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var postId = e.detail.value.id;
    var date = e.detail.value.date;
    var title = e.detail.value.title;
    var content = e.detail.value.cont;
    var detail = e.detail.value.detail;
    wx.showModal({
      title: '你确定要提交信息吗？',
      content: '',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: 'https://www.xhuidong.cn/AnimalServlet',
            data: {
              postId: postId,
              date: date,
              title: title,
              content: content,
              detail: detail,
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
            }
            
          })
          wx.showToast({
            title: '提交成功!',
            icon: 'success',
            duration: 2000
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  },
  formReset: function () {
    console.log('form发生了reset事件')
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