// pages/product_detail/index.js
// 导入requestUtil
import {
  getBaseUrl,
  requestUtil
} from "../../utils/requestUtil"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {},
    baseUrl: '',
    currentIndex: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const baseUrl = getBaseUrl()
    this.setData({
      baseUrl
    })

    this.getProductDetail(options.id)
  },
  // 获取商品详情
  async getProductDetail(id) {
    const res = await requestUtil({
      url: "/product/findDetail",
      data: {
        id
      }
    })
    if (res.code === 0) {
      this.setData({
        product: res.product
      })
    }
  },
// tab栏切换
handleItemTitle (e) {
  console.log(e);
  const { index } = e.currentTarget.dataset
  this.setData({currentIndex:index})
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})