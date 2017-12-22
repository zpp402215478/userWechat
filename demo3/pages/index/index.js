//index.js
//获取应用实例
var api = require('../../utils/data.js');

const app = getApp()
var fileData = require('../../utils/data.js')

Page({
  data: {
    colors: ['red', 'orange', 'yellow', 'green', 'purple'],
    // banner 初始化
    banner_url: fileData.getBannerData(),
    indicatorDots: true,  
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    restaurantList: [],
    showMore:true,
    httpLock:true,
    pnum: 1,
    psize: 5
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  goRestaurant: function (e){
    var id = e.currentTarget.dataset.aid;
    wx.navigateTo({
      url: '../restaurant/restaurant?id='+id
    })
  },


  onLoad: function () {
    if(!this.data.showMore){
      return
    };
    this.RestaurantDate(this.data.pnum);
  },

  RestaurantDate: function (pnum){
    var that = this
    if (that.data.httpLock){ 
      that.setData({
        httpLock:false
      })
    wx.request({
      url: getApp().data.servsers+'/fastShopAction/getFastShop.do',//仅为示例，并非真实的接口地址
      data: {
        pagenum: pnum,
        pagesize: that.data.psize
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (!res.data.isLastPage){
          that.setData({
            restaurantList: that.data.restaurantList.concat(res.data.list),
            pnum: pnum + 1,
            showMore: true,
            httpLock: true
          })
        }else{
          that.setData({
            restaurantList: that.data.restaurantList.concat(res.data.list),
            showMore: false, 
            httpLock:true
          })
        }
      }
    })
    }

  },
  //加载更多
  loadMore: function(e){
    if (!this.data.showMore){
      return ;
    }
    this.RestaurantDate(this.data.pnum);
  }

})
