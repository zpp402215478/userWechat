/**
 * banner数据
 */
function getBannerData() {
  var arr = ['../../images/banner_01.png', '../../images/banner_02.png', '../../images/banner_03.png', '../../images/banner_04.png']
  return arr
}

/*
 * 对外暴露接口
 */
module.exports = {
  getBannerData: getBannerData
}