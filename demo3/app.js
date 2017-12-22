//app.js
App({
  data: {
    servsers: "http://127.0.0.1:10006",
    openid:"",
    chekFood: {} //购物车菜单id 及数量
  } ,
  onLaunch: function () {
  //  var that = this
  wx.login({
    success: function(res){
      if(res.code){
          wx.request({
          //  url: 'https://api.weixin.qq.com/sns/jscode2session',
           url: getApp().data.servsers + '/userAction/getWeichatUser.do',
            data: {
            　//小程序唯一标识
              appid: 'wx75a9554550e8f8df',
              //小程序的 app secret
              secret: '10218412d2dcb3405380a9541475d983',
              grant_type: 'authorization_code',
              js_code: res.code
            },
            method: 'GET',
            header: { 'content-type': 'application/json' },
            success: function (openIdRes){
              getApp().data.openid = openIdRes.data.openid
              // that.setData({
              //   openid: openIdRes.data.openid
              // })
            //  weChatUserInfo.openId = openIdRes.data.openid;
            },
            fail: function (error) {
              console.info("获取用户openId失败");
              console.info(error);
            }
          })
      }
    }
  })






















































    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)

    // var openId = (wx.getStorageSync('openId'))
    // console.log(openId)
    // if (openId) {
    //   wx.getUserInfo({
    //     success: function (res) {
    //       that.setData({
    //         nickName: res.userInfo.nickName,
    //         avatarUrl: res.userInfo.avatarUrl,
    //       })
    //     },
    //     fail: function () {
    //       // fail
    //       console.log("获取失败！")
    //     },
    //     complete: function () {
    //       // complete
    //       console.log("获取用户信息完成！")
    //     }
    //   })
    // } else {
    // // 登录
    //   wx.login({
    //     success: function (res) {
    //       console.log(res.code)
    //       if (res.code) {
    //         wx.getUserInfo({
    //           withCredentials: true,
    //           success: function (res_user) {
    //             wx.request({
    //               //后台接口地址
    //               url: 'https://api.weixin.qq.com/sns/jscode2session',
    //               data: {
    //                 code: res.code
    //               },
    //               header: {
    //                 'content-type': 'application/json'
    //               },
    //               success: function (res) {
    //                 // this.globalData.userInfo = JSON.parse(res.data);
    //                 that.setData({
    //                   nickName: res.data.nickName,
    //                   avatarUrl: res.data.avatarUrl,
    //                 })
    //                 wx.setStorageSync('openId', res.data.openId);

    //               }
    //             })
    //           }, fail: function () {
    //             wx.showModal({
    //               title: '警告通知',
    //               content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
    //               success: function (res) {
    //                 if (res.confirm) {
    //                   wx.openSetting({
    //                     success: (res) => {
    //                       if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
    //                         wx.login({
    //                           success: function (res_login) {
    //                             if (res_login.code) {
    //                               wx.getUserInfo({
    //                                 withCredentials: true,
    //                                 success: function (res_user) {
    //                                   wx.request({
    //                                     url: 'https://api.weixin.qq.com/sns/jscode2session',
    //                                     data: {
    //                                       code: res_login.code,
    //                                       encryptedData: res_user.encryptedData,
    //                                       iv: res_user.iv
    //                                     },
                                       
    //                                     header: {
    //                                       'content-type': 'application/json'
    //                                     },
    //                                     success: function (res) {
    //                                       that.setData({
    //                                         nickName: res.data.nickName,
    //                                         avatarUrl: res.data.avatarUrl,

    //                                       })
    //                                       wx.setStorageSync('openId', res.data.openId);
    //                                     }
    //                                   })
    //                                 }
    //                               })
    //                             }
    //                           }
    //                         });
    //                       }
    //                     }, fail: function (res) {

    //                     }
    //                   })

    //                 }
    //               }
    //             })
    //           }, complete: function (res) {


    //           }
    //         })
    //       }
    //     }
    //   })
    // }
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})