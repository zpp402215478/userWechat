var app = getApp()
Page({
  data: {
   
  },
  onLoad: function (options) {
    var that = this
    var id = options.id;
    console.log(id)
    wx.getStorage({
      key: 'cargo',
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  }
})		