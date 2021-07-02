const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime
}


//--- 封装ajax请求，还需要导出
function $request(_url,type,callback,data){
  wx.request({//微信的请求方法
    url:_url,
    method:type,
    data,
    header:{},//请求头
    success(res){
      callback(res);
    }
  })
}
module.exports = {
  $request //---ajax封装函数导出
}