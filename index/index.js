const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
  clickMe: function () {
    this.setData({ msg: "Hello World" })
    
  },
   handleTap1: function () {
     this.setData({ msg: "handleTap1" })
     console.log(this.data);
  },
   handleTap2: function () {
     this.setData({ msg: "handleTap2" })
     console.log(this.data);
  },
   handleTap3: function () {
     this.setData({ msg: "handleTap3" })
     console.log(this.data);
  },
   handleTap4: function () {
     this.setData({ msg: "handleTap4" })
     console.log(this.data);
  },
  bindViewTap: function (event) {
    console.log(event);
    event.currentTarget.dataset.alphaBeta === 1 // - 会转为驼峰写法
    console.log(event.currentTarget.dataset.alphaBeta === "1");
    event.currentTarget.dataset.alphabeta === 2 // 大写会转为小写
    console.log(event.currentTarget.dataset.alphabeta === "2");
  },
  bindViewTap: function (e) {
    e.mark.myMark === "last" // true
    e.mark.anotherMark === "leaf" // true
    console.log(e.mark.myMark === "last")
    console.log(e)
  }
  

})
