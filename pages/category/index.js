// pages/category/index.js
import {
  getBaseUrl,
  requestUtil
} from "../../utils/requestUtil"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenu: [],
    rightContent: [],
    baseUrl: ''
  },
  categoriesList: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 初始化baseUrl
    const baseUrl = getBaseUrl()
    this.setData({
      baseUrl
    })
    this.getCategoriesList()
  },
  // 获取swiper信息
  async getCategoriesList() {
    const res = await requestUtil({
      url: "/bigType/findCategories"
    })
    const {
      categoriesList
    } = res
    const leftMenu = categoriesList.map(v => v.name)
    // 默认是下标为0的数据
    const rightContent = categoriesList[0].smallTypeList
    if (res.code === 0) {
      this.setData({
        leftMenu,
        rightContent
      })
    }
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