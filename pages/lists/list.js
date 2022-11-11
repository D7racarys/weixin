// pages/lists/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info : "Taylor Swift",
    imagesrc: "https://img1.baidu.com/it/u=3009731526,373851691&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666803600&t=74afe80b1dc2ba78af24d91b0f64fe3c",
    randomNum: Math.random() * 10,
    count: 0,
    x : 0,
    type: 2,
    flag: false,
    arr: ['exile','begin again','love stroy']
  },

  //事件处理函数
  btnevent (e){
    console.log(e)
  },
  //+1按钮响应函数
  countincrease (){
    this.setData({
      count : this.data.count + 1
    })
  },

  //接受参数函数
  btn1(e){
    console.log(e)
  },

    //input处理函数
    input1(e){
      console.log(e.detail.value)
    },

    input2(e){
      this.setData({
        x : e.detail.value
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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