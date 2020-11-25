Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 118.70528,
    latitude: 32.177459,
    // markers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: "https://www.xhuidong.cn/MarkerServlet",
      data: {
        //传入的参数
      },
      success: (res) => {
        var markers = []
        //res.data
        var msg = [{
          id: "0",
          longitude: "118.70528",
          latitude: "32.177459",
          iconPath: "/images/map/location.png"
        }, {
          id: "1",
          longitude: "118.70528",
          latitude: "32.176459",
          iconPath: "/images/map/location.png"
        }]
        for (var item = 0; item < msg.length; item++) {
          var markerItem = {
            id: item,
            latitude: msg[item].latitude,
            longitude: msg[item].longitude,
            iconPath: msg[item].iconPath,
          };
          markers.push(markerItem);
        }
        that.setData({
          markers: markers
        })
      }
    })
  },

  /* 获取input中输入文本 */
  onBindConfirm: function (event) {
    var postId = event.detail.value;
    wx.navigateTo({
      url: 'animal-detail/animal-detail?postId=' + postId,
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