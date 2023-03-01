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
    scrollTop: 0,
    baseUrl: '',
    currentIndex:0 // 默认当前选中菜单下表 0 
  },
  categoriesList: [],  // 在this里
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
    this.categoriesList = categoriesList
    const leftMenu = categoriesList.map(v => v.name)
    // 默认是下标为0的数据
    const rightContent = categoriesList[this.data.currentIndex].smallTypeList || {} 
    if (res.code === 0) {
      this.setData({
        leftMenu,
        rightContent,
      })
    }
  },
  // 处理左侧菜单改变
  handleMenuChange (e) {
     // e.currentTarget.dataset.index
     const { index } = e.currentTarget.dataset
     const rightContent = this.categoriesList[index].smallTypeList
      this.setData({
        currentIndex:index , // 更新选中
        rightContent,
        scrollTop: 0, // 置顶
      })
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
    // 在这个生命周期中处理首页跳转
    // 得到 app 中的全局参数
    const app = getApp()
    const { index } = app.globalData
    if( index != -1 ) { // 说明是从首页进入
      // 与index匹配 显示相应的分类
      // 因为请求数据的方法是异步的 这里不能直接使用this.categoriesList
      //this.setData({currentIndex:index})
      // this.getCategoriesList() // 这样写的话请求次数会多一次
      setTimeout(()=>{ // 用定时器解决异步问题
        const rightContent = this.categoriesList[index].smallTypeList
        this.setData({
          currentIndex:index , // 更新选中状态
          rightContent,
          scrollTop: 0, // 置顶
        })

      },500)
      /**
       * TODO
       */

    }

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