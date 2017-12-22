var app = getApp()
Page({
  data: {
    list: [], 
    caidan:[],
    cart: {
      count: 0,  //价钱
      total: 0, //总数
      list: {}, //购物车菜单id 及数量
      priceAndName: {},
      shopid:0
    },
    showCartDetail: false
  },
  onLoad: function (options) {
    var that = this
    var id = options.id;
    that.setData({
      shopid: id
    })
    wx.request({
      url: getApp().data.servsers +'/fastShopAction/getFashShopById/'+id+'.do',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          list: res.data,
          caidan: res.data.foodtypeList[0].name
        })
      }
    })
  },

  submit: function () {
    wx.setStorage({
      key: "cargo",
      data: this.data.cart
    });
    wx.navigateTo({
      url: '../determine/determine?id=' + this.data.shopid
    })
  },

  changemenu:function (options){
    var that = this
    var text = options.currentTarget.dataset.text;
    that.setData({
      caidan: text
    })
  },

  tapAddCart: function (options){
      var that = this
      var id = options.currentTarget.dataset.id
      var price = options.currentTarget.dataset.price
      var name = options.currentTarget.dataset.name
      var num =this.data.cart.list[id] || 0;
      this.data.cart.list[id] = num + 1;//数量
      getApp().data.chekFood[id] = num + 1;
      this.data.cart.priceAndName[id] = price; 
      this.data.cart.priceAndName["name"+id] = name;
      this.countCart();
  },

  tapReduceCart: function (options){
    var that = this
    var id = options.currentTarget.dataset.id
    var price = options.currentTarget.dataset.price
    var name = options.currentTarget.dataset.name
    var num = this.data.cart.list[id] || 0;
    if(num <= 1){
      delete this.data.cart.list[id];
      delete getApp().data.chekFood[id];
      delete this.data.cart.priceAndName[id];
      delete this.data.cart.priceAndName["name" + id] ;
    }else{
      this.data.cart.list[id] = num - 1;//数量
      getApp().data.chekFood[id] = num + 1;
      this.data.cart.priceAndName[id] = price;
      this.data.cart.priceAndName["name" + id] = name;
    }   
    this.countCart();
  },

//统计购物车
  countCart: function () {
    var count = 0,
      total = 0;
    for (var id in this.data.cart.list) {
      count += this.data.cart.list[id];
      total += this.data.cart.priceAndName[id] * 10000 * this.data.cart.list[id] / 10000;
    }
    this.data.cart.count = count;
    this.data.cart.total = total;
    this.setData({
      cart: this.data.cart
    });
  },

  //展示购物车详情
  showCartDetail:function(){
    this.setData({
      showCartDetail: !this.data.showCartDetail
    });
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