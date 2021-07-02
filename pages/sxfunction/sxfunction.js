// pags/home/home.js

Page({

  /**
   * 页面的初始数据
   *
   */
  data: {
    
      pathurl:"",
      // 初始化结果宽带
      result_width:200,
      hasAns:false,
  // 先设置默认标题
   js_title:'不定积分计算器',
  // 决定哪个输入表单显示
  postvisual:{
     bdjf:true,
     hsqd:false,
     ysfj:false,
     djf:false,
     jx:false,
     hj:false
  },

    bdjfpost:{
      function:'',
      var:'',
      NUM_CHOIC:'0'
    },
    hsqdpost:{
      function:'',
      var:'',
      order:'',
      NUM_CHOIC:'1'
    },
    ysfjpost:{
      function:'',
      NUM_CHOIC:'2'
    },
    djfpost:{
      function:'',
      var:'',
      a:'',
      b:'',
      NUM_CHOIC:'3'
    },
    jxpost:{
      function:'',
      var:'',
      val:'',//展开点
      limi:'0',  //0表示两边求极限，1表示右极限，2表示左极限
      NUM_CHOIC:'4'
    },
    hjpost:{
      function:'',
      NUM_CHOIC:'5'
    },
    imgList:[
      '/pages/icon/city-buildings.png',
      '/pages/icon/inspection.png',
      '/pages/icon/module.png',
      '/pages/icon/shop.png',
      '/pages/icon/sms.png'
    ],
    navList:[{
      icon:'/pages/icon/bdjf.png',
      events:'goto1',
      text:'不定积分'
    },
    {
        icon:'/pages/icon/hsqd.png',
        events:'goto2',
        text:'函数求导'        
    },
    {
      icon:'/pages/icon/ysfj.png',
      events:'goto3',
      text:'因式分解'
    }
    ],
    nacList:[
      {
        icon:'/pages/icon/jf.png',
        events:'goto4',
        text:'定积分'
      },
      {
        icon:'/pages/icon/jx.png',
        events:'goto5',
        text:'极限计算'
      },
      {
        icon:'/pages/icon/hj.png',
        events:'goto6',
        text:'表达式化简'
      }
    ],
    isLoading: true,					// 判断是否尚在加载中
		article: {}	
  },

  goto1:function(){
this.setData({
  postvisual:{
    bdjf:true,
    hsqd:false,
    ysfj:false,
    djf:false,
    jx:false,
    hj:false
 },
 hasAns:false,
 js_title:'不定积分计算器'
 
})
  },
  goto2:function(){
    this.setData({
      postvisual:{
        bdjf:false,
        hsqd:true,
        ysfj:false,
        djf:false,
        jx:false,
        hj:false
     },
     hasAns:false,
     js_title:'函数求导计算器'
    })
    
  },
  goto3:function(){
    this.setData({
      postvisual:{
        bdjf:false,
        hsqd:false,
        ysfj:true,
        djf:false,
        jx:false,
        hj:false
     },
     hasAns:false,
     js_title:'因式分解计算器'
    })

  },
  goto4:function(){
    this.setData({
      postvisual:{
        bdjf:false,
        hsqd:false,
        ysfj:false,
        djf:true,
        jx:false,
        hj:false
     },
     hasAns:false,
     js_title:'定积分计算器'
    })

  },
  goto5:function(){
    this.setData({
      postvisual:{
        bdjf:false,
        hsqd:false,
        ysfj:false,
        djf:false,
        jx:true,
        hj:false
     },
     hasAns:false,
     js_title:'极限计算器:类型:0-双侧极限 1=右侧极限 2-左侧极限'
    })

  },
  goto6:function(){
    this.setData({
      postvisual:{
        bdjf:false,
        hsqd:false,
        ysfj:false,
        djf:false,
        jx:false,
        hj:true
     },
     hasAns:false,
     js_title:'表达式化简计算器'
    })

  },

  // 数据交互部分
  // 1.表达式输入响应函数
  inputFunction1:function (e) {
    this.setData(
      {'bdjfpost.function':e.detail.value}
    )
    // console.log(this.data.bdjfpost.function)
    // console.log(this.data.bdjfpost.NUM_CHOIC)       
  },
  inputvar1:function(e){
   this.setData({'bdjfpost.var':e.detail.value})
   console.log(this.data.bdjfpost.function)
   console.log(this.data.bdjfpost.NUM_CHOIC) 
   console.log(this.data.bdjfpost.var)
  },

  //函数求导
  inputFunction2:function (e) {
    this.setData(
      {'hsqdpost.function':e.detail.value}
    )
    console.log(this.data.hsqdpost.function)    
    console.log(this.data.hsqdpost.NUM_CHOIC)  
  },
  inputvar2:function(e){
    this.setData({'hsqdpost.var':e.detail.value})
    console.log(this.data.hsqdpost.var)
  },

  inputorder:function(e){
    this.setData({'hsqdpost.order':e.detail.value})
    console.log(this.data.hsqdpost.order)
  },
  // 因式分解
  inputFunction3:function (e) {
    this.setData(
      {'ysfjpost.function':e.detail.value}
    )
    console.log(this.data.ysfjpost.function)
    console.log(this.data.ysfjpost.NUM_CHOIC)      
  },
  // 定积分部分
  inputFunction4:function (e) {
    this.setData(
      {'djfpost.function':e.detail.value}
    )
    console.log(this.data.djfpost.function)   
    console.log(this.data.djfpost.NUM_CHOIC)   
  },
  inputvar4:function(e){
    this.setData({'djfpost.var':e.detail.value})
    console.log(this.data.djfpost.var) 
  },
  inputa:function(e){
    this.setData({'djfpost.a':e.detail.value})
    console.log(this.data.djfpost.a) 
  },
  inputb:function(e){
    this.setData({'djfpost.b':e.detail.value})
    console.log(this.data.djfpost.b) 
  },
  //极限计算部分
  inputFunction5:function (e) {
    this.setData(
      {'jxpost.function':e.detail.value}
    )
    console.log(this.data.jxpost.function) 
    console.log(this.data.jxpost.NUM_CHOIC)     
  },
  inputvar5:function(e){
    this.setData({'jxpost.var':e.detail.value})
    console.log(this.data.jxpost.var)
  },
  inputval:function(e){
    this.setData({'jxpost.val':e.detail.value})
    console.log(this.data.jxpost.val)
  },
  inputlimiType:function(e){
   this.setData({'jxpost.limi':e.detail.value})
   console.log(this.data.jxpost.limi)
  },
  // 表达式化简部分
  inputFunction6:function (e) {
    this.setData(
      {'hjpost.function':e.detail.value}
    )
    console.log(this.data.hjpost.function)  
    console.log(this.data.hjpost.NUM_CHOIC)    
  },
 
 

  // 数据提交
  submit1:function(){

    console.log(this.data.bdjfpost),
   
    wx.showToast({
      title: '计算中',
      icon:'loading',
      duration:20000
    })
    wx.request({
      url: 'https://magic-number-tool.top/jfview/',
      
      data:{
        function:this.data.bdjfpost.function,
         var:this.data.bdjfpost.var,
         NUM_CHOIC:this.data.bdjfpost.NUM_CHOIC
        
      },
      method:'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-form-urlencoded' //使用POST方法要带上这个header
      },
      success: res =>{
        wx.hideLoading();
        if(res.statusCode==200){
          console.log(res.data)
         if(res.data.status=="计算成功"){
          wx.showToast({
            title:res.data.status,
            icon:'success',
            duration:2000

          })
          this.setData(
            
            {pathurl:res.data.ans_img,
            result_width:100,
            hasAns:true
          }
            
          )
        }
          else{
            wx.showToast({
              title: res.data,
              icon:'none',
              duration:2000
            })
            this.setData({
              hasAns:false
            })
            
          }
          
   

        }
      }
    })
  },
// 函数求导数据提交
  submit2:function(){

    console.log(this.data.bdjfpost),
   
    wx.showToast({
      title: '计算中',
      icon:'loading',
      duration:20000
    })
    wx.request({
      url: 'https://magic-number-tool.top/jfview/',
      
      data:{
        function:this.data.hsqdpost.function,
         var:this.data.hsqdpost.var,
         order:this.data.hsqdpost.order,
         NUM_CHOIC:this.data.hsqdpost.NUM_CHOIC
        
      },
      method:'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-form-urlencoded' //使用POST方法要带上这个header
      },
      success: res =>{
        wx.hideLoading();
        if(res.statusCode==200){
          console.log(res.data)
         if(res.data.status=="计算成功"){
          wx.showToast({
            title:res.data.status,
            icon:'success',
            duration:2000

          })
          this.setData(
            
            {pathurl:res.data.ans_img,
            result_width:100,
            hasAns:true
          }
            
          )
        }
          else{
            wx.showToast({
              title: res.data,
              icon:'none',
              duration:2000
            })
            this.setData({
              hasAns:false
            })
            
          }
          
   

        }
      }
    })
  },
// 因式分解数据提交
submit3:function(){

  console.log(this.data.bdjfpost),
 
  wx.showToast({
    title: '计算中',
    icon:'loading',
    duration:20000
  })
  wx.request({
    url: 'https://magic-number-tool.top/jfview/',
    
    data:{
      function:this.data.ysfjpost.function,
       NUM_CHOIC:this.data.ysfjpost.NUM_CHOIC
      
    },
    method:'POST',
    header: {
      // 'content-type': 'application/json' // 默认值
      'content-type': 'application/x-www-form-urlencoded' //使用POST方法要带上这个header
    },
    success: res =>{
      wx.hideLoading();
      if(res.statusCode==200){
        console.log(res.data)
       if(res.data.status=="计算成功"){
        wx.showToast({
          title:res.data.status,
          icon:'success',
          duration:2000

        })
        this.setData(
          
          {pathurl:res.data.ans_img,
          result_width:100,
          hasAns:true
        }
          
        )
      }
        else{
          wx.showToast({
            title: res.data,
            icon:'none',
            duration:2000
          })
          this.setData({
            hasAns:false
          })
          
        }
        
 

      }
    }
  })
},

// 定积分
submit4:function(){

  console.log(this.data.bdjfpost),
 
  wx.showToast({
    title: '计算中',
    icon:'loading',
    duration:20000
  })
  wx.request({
    url: 'https://magic-number-tool.top/jfview/',
    
    data:{
      function:this.data.djfpost.function,
      var:this.data.djfpost.var,
      a:this.data.djfpost.a,
      b:this.data.djfpost.b,
       NUM_CHOIC:this.data.djfpost.NUM_CHOIC
      
    },
    method:'POST',
    header: {
      // 'content-type': 'application/json' // 默认值
      'content-type': 'application/x-www-form-urlencoded' //使用POST方法要带上这个header
    },
    success: res =>{
      wx.hideLoading();
      if(res.statusCode==200){
        console.log(res.data)
       if(res.data.status=="计算成功"){
        wx.showToast({
          title:res.data.status,
          icon:'success',
          duration:2000

        })
        this.setData(
          
          {pathurl:res.data.ans_img,
          result_width:100,
          hasAns:true
        }
          
        )
      }
        else{
          wx.showToast({
            title: res.data,
            icon:'none',
            duration:2000
          })
          this.setData({
            hasAns:false
          })
          
        }
        
 

      }
    }
  })
},
// 极限计算
submit5:function(){

  console.log(this.data.bdjfpost),
 
  wx.showToast({
    title: '计算中',
    icon:'loading',
    duration:20000
  })
  wx.request({
    url: 'https://magic-number-tool.top/jfview/',
    
    data:{
      function:this.data.jxpost.function,
      var:this.data.jxpost.var,
      val:this.data.jxpost.val,
      limi:this.data.jxpost.limi,
       NUM_CHOIC:this.data.jxpost.NUM_CHOIC
      
    },
    method:'POST',
    header: {
      // 'content-type': 'application/json' // 默认值
      'content-type': 'application/x-www-form-urlencoded' //使用POST方法要带上这个header
    },
    success: res =>{
      wx.hideLoading();
      if(res.statusCode==200){
        console.log(res.data)
       if(res.data.status=="计算成功"){
        wx.showToast({
          title:res.data.status,
          icon:'success',
          duration:2000

        })
        this.setData(
          
          {pathurl:res.data.ans_img,
          result_width:100,
          hasAns:true
        }
          
        )
      }
        else{
          wx.showToast({
            title: res.data,
            icon:'none',
            duration:2000
          })
          this.setData({
            hasAns:false
          })
          
        }
        
 

      }
    }
  })
},
submit6:function(){

  console.log(this.data.bdjfpost),
 
  wx.showToast({
    title: '计算中',
    icon:'loading',
    duration:20000
  })
  wx.request({
    url: 'https://magic-number-tool.top/jfview/',
    
    data:{
      function:this.data.hjpost.function,
       NUM_CHOIC:this.data.hjpost.NUM_CHOIC
      
    },
    method:'POST',
    header: {
      // 'content-type': 'application/json' // 默认值
      'content-type': 'application/x-www-form-urlencoded' //使用POST方法要带上这个header
    },
    success: res =>{
      wx.hideLoading();
      if(res.statusCode==200){
        console.log(res.data)
       if(res.data.status=="计算成功"){
        wx.showToast({
          title:res.data.status,
          icon:'success',
          duration:2000

        })
        this.setData(
          
          {pathurl:res.data.ans_img,
          result_width:100,
          hasAns:true
        }
          
        )
      }
        else{
          wx.showToast({
            title: res.data,
            icon:'none',
            duration:2000
          })
          this.setData({
            hasAns:false
          })
          
        }
        
 

      }
    }
  })
},
  // 放大结果图片
  fd_img:function(){
    this.setData({
      result_width:this.data.result_width+100
    })
  },
  sx_img:function(){
    if (this.data.result_width>=200)
    this.setData({
      result_width:this.data.result_width-100
    })
  },

  // 数据提交与Django后端交互部分
  /**
   * 生命周期函数--监听页面加载
   */


  onShareAppMessage: function () {
    return {
      title: 'button',
      path: 'page/component/pages/button/button'
    }
  },


  
})



