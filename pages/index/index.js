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
    swiperList: [],
    baseUrl: '',
    bigTypeList: [],
    bigTypeList_row1: [],
    bigTypeList_row2: [],
    hotProductList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const baseUrl = getBaseUrl()
    this.setData({
      baseUrl
    })

    this.getSwiperList()
    this.getBigTypeList()

    this.getHotProductList()

  },

  // 获取swiper信息
  async getSwiperList() {
    const res = await requestUtil({
      url: "/product/findSwiper"
    })
    const {
      message
    } = res
    if (res.code === 0) {
      this.setData({
        swiperList: message,
      })
    }
  },

  // 获取商品大类信息
  async getBigTypeList() {
    const res = await requestUtil({
      url: "/bigType/findAll"
    })
    const {
      bigTypeList
    } = res

    if (res.code === 0) {
      this.setData({
        bigTypeList,
        bigTypeList_row1: bigTypeList.filter((item, index) => {
          return index < 5
        }),
        bigTypeList_row2: bigTypeList.filter((item, index) => {
          return index >= 5
        })
      })
    }

  },

  // 获取热卖商品信息
  async getHotProductList() {
    const res = await requestUtil({
      url: "/product/findHot"
    })
    const {
      hotProductList

    } = res

    if (res.code === 0) {
      this.setData({
        hotProductList
      })
    }

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