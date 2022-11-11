// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query : {},
    colorList : [],
    flag : false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad :function (options){
    console.log(options)
    this.setData({
      query : options
    })
    this.getColor()
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
  getColor(){
    wx.showLoading({title: 'loading...'})
    this.setData({
      flag : true
    })
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method : 'GET',
      success : ({ data : res }) => {
        this.setData({
          colorList : [...this.data.colorList, ...res.data]
        })
      },
      complete : () => {
        wx.hideLoading()
        this.setData({
          flag : false
        })
      }
    })
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
    console.log('启用下拉刷新')
    if(this.data.flag) return
    this.getColor()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('触发上拉触底')
    this.getColor()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})