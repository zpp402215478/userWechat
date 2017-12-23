var app = getApp()
Page({
  data: {
   checkFood :[],
   checkPriceAndName:[],
   checkMoney : 0,
   deliverprice : 0
  },
  onLoad: function (options) {
    var that = this
    var id = options.id;
    wx.getStorage({
      key: 'cargo',
      success: function (res) {
        that.setData({
        checkFood: res.data.list,
        checkPriceAndName: res.data.priceAndName,
        checkMoney: res.data.total         
        })
      }
    })

    wx.request({
      url: getApp().data.servsers + '/fastShopAction/getFashShopById/' + id + '.do',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          checkMoney: that.data.checkMoney + res.data.deliverprice,
          deliverprice: res.data.deliverprice
        })
      }
    })
  },

  submit: function(e){
    if (e.detail.value.username.length == 0) {
      wx.showToast({
        title: '昵称不得为空!',
        icon: 'loading',
        duration: 1500
      })
    }
    if ( e.detail.value.telephone.length == 0) {
      wx.showToast({
        title: '手机号码不得为空!',
        icon: 'loading',
        duration: 1500
      })
    }
    if (e.detail.value.address.length == 0) {
      wx.showToast({
        title: '送餐地址不得为空!',
        icon: 'loading',
        duration: 1500
      })
    }
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