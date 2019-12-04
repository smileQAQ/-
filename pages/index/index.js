// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieImg: Array(4),
    funcTag: [
      {
        imgUrl: 'https://www.websitetomine.top/image/base/01d142a61cca159b2b2b5a7d9ca4a7f5.png',
        title: '签到必领券'
      },
      {
        imgUrl: 'https://www.websitetomine.top/image/base/01d142a61cca159b2b2b5a7d9ca4a7f5.png',
        title: '冰雪奇缘2'
      },
      {
        imgUrl: 'https://www.websitetomine.top/image/base/01d142a61cca159b2b2b5a7d9ca4a7f5.png',
        title: '本周六开唱'
      },
      {
        imgUrl: 'https://www.websitetomine.top/image/base/01d142a61cca159b2b2b5a7d9ca4a7f5.png',
        title: '杨丞琳抢票'
      }
    ],
    adMovieData:{
      img: 'https://www.websitetomine.top/image/base/c3484fec3154d9f0620d501baf77d233.jpg',
      name: '疯狂的外星人',
      score: 8.5,
      desc: '评分超越93%的剧情片'
    },
    movieList:[
      {
        img: 'https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@464w_644h_1e_1c',
        title: '冰雪奇缘2',
        score: 8.9,
        actor: '哈哈哈哈哈哈哈啊哈哈啊哈哈哈啊哈哈啊哈啊哈哈',
        nearShowTime: '今天262家影院放映2222场',
        isShow: '1'
      }, {
        img: 'https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@464w_644h_1e_1c',
        title: '冰雪奇缘2',
        score: 8.9,
        actor: '哈哈哈哈哈哈哈啊哈哈啊哈哈哈啊哈哈啊哈啊哈哈',
        nearShowTime: '今天262家影院放映2222场',
        isShow: '1'
      }, {
        img: 'https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@464w_644h_1e_1c',
        title: '冰雪奇缘2',
        score: 8.9,
        actor: '哈哈哈哈哈哈哈啊哈哈啊哈哈哈啊哈哈啊哈啊哈哈',
        nearShowTime: '今天262家影院放映2222场',
        isShow: '1'
      }, {
        img: 'https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@464w_644h_1e_1c',
        title: '冰雪奇缘2',
        score: 8.9,
        actor: '哈哈哈哈哈哈哈啊哈哈啊哈哈哈啊哈哈啊哈啊哈哈',
        nearShowTime: '今天262家影院放映2222场',
        isShow: '1'
      }, {
        img: 'https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@464w_644h_1e_1c',
        title: '冰雪奇缘2',
        score: 8.9,
        actor: '哈哈哈哈哈哈哈啊哈哈啊哈哈哈啊哈哈啊哈啊哈哈',
        nearShowTime: '今天262家影院放映2222场',
        isShow: '1'
      }, {
        img: 'https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@464w_644h_1e_1c',
        title: '冰雪奇缘2',
        score: 8.9,
        actor: '哈哈哈哈哈哈哈啊哈哈啊哈哈哈啊哈哈啊哈啊哈哈',
        nearShowTime: '今天262家影院放映2222场',
        isShow: '1'
      }, {
        img: 'https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@464w_644h_1e_1c',
        title: '冰雪奇缘2',
        score: 8.9,
        actor: '哈哈哈哈哈哈哈啊哈哈啊哈哈哈啊哈哈啊哈啊哈哈',
        nearShowTime: '今天262家影院放映2222场',
        isShow: '1'
      }, {
        img: 'https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@464w_644h_1e_1c',
        title: '冰雪奇缘2',
        score: 8.9,
        actor: '哈哈哈哈哈哈哈啊哈哈啊哈哈哈啊哈哈啊哈啊哈哈',
        nearShowTime: '今天262家影院放映2222场',
        isShow: '1'
      }, {
        img: 'https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@464w_644h_1e_1c',
        title: '冰雪奇缘2',
        score: 8.9,
        actor: '哈哈哈哈哈哈哈啊哈哈啊哈哈哈啊哈哈啊哈啊哈哈',
        nearShowTime: '今天262家影院放映2222场',
        isShow: '1'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})