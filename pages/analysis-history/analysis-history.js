// pages/analysis-history/analysis-history.js
Page({


  data: {
    items:[
      {yc:"时间1，异常1"},
      { yc: "时间2，异常2" },
      { yc: "时间3，异常3" },
      { yc: "时间4，异常4" },
      { yc: "时间5，异常5" },
      { yc: "时间6，异常6" },
      { yc: "时间7，异常7" },
      { yc: "时间8，异常8" },
      { yc: "时间9，异常9" },
      { yc: "时间10，异常10" },
      { yc: "时间11，异常11" },
      { yc: "时间12，异常12" },
      { yc: "时间13，异常13" },
      { yc: "时间14，异常14" },
      { yc: "时间15，异常15" },
      { yc: "时间16，异常16" },
      { yc: "时间17，异常17" },
      { yc: "时间18，异常18" },
      { yc: "时间14，异常14" },
      { yc: "时间15，异常15" },
      { yc: "时间16，异常16" },
      { yc: "时间17，异常17" },
      { yc: "时间18，异常18" },
      { yc: "时间10，异常10" },
      { yc: "时间11，异常11" },
      { yc: "时间12，异常12" },
      { yc: "时间13，异常13" },
      { yc: "时间14，异常14" },
      { yc: "时间15，异常15" },
      { yc: "时间16，异常16" },
      { yc: "时间17，异常17" },
      { yc: "时间18，异常18" },
      { yc: "时间14，异常14" },
      { yc: "时间15，异常15" },
      { yc: "时间16，异常16" },
      { yc: "时间17，异常17" },
      { yc: "时间18，异常18" }
    ],
    toggle: false
  },
  navigate: function () {
    this.setData({
      toggle: !this.data.toggle
    });
  }
})