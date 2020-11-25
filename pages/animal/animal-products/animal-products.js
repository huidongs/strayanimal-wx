/* 这里只能用相对路径！！！ */
import {
  Base
} from '../../../utils/base.js';
var base = new Base(); //实例化 商品详情 对象


Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], //picker可选数量范围
    productCount: 1, //商品数量
    currentTabsIndex: 0, //当前切换下标
    price: 19.0, //当前商品的价格
    tabContent: ['商品详情', '产品参数', '售后保障'], //商品tab信息页面
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /* picker点击获取数量 */
  bindPickerChange: function(event) {
    var index = event.detail.value;
    var selectedCount = this.data.countsArray[index];
    this.setData({
      productCount: selectedCount
    })
  },
  /* 点击购买进入支付页面 */
  onToShoping: function(event) {
    wx.navigateTo({
      url: '../animal-order/animal-order?productCount=' + this.data.productCount + '&price=' + this.data.price,
    })
  },
  /* 切换详情面板 */
  onTabsItemTap: function(event) {
    //此方法在base.js中定义
    var index = base.getDataSet(event, 'index');
    this.setData({
      currentTabsIndex: index
    });
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