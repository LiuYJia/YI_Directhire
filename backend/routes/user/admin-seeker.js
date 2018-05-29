var express = require('express'),
    router = express.Router(),
    AdminS = require('../../models/user-seeker'),
    crypto = require('crypto'),
    TITLE_REG = 'seeker';

router.get('/', function(req, res) {

      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header('Access-Control-Allow-Headers', 'content-type');
  
      //接收参数
      var userName = req.query.userName;
      var userPwd = req.query.userPwd;
      var status = req.query.status;
  
      console.log('param:'+status);
      console.log('username:'+userName);
      console.log('userpassword:'+userPwd);
      
  
      //密码加密
      var md5 = crypto.createHash("md5");
      
    
      //创建UserS对象
      var newUser = new AdminS({
        username: userName,
        password: userPwd,
        status: status
      });
  
      //检查用户名是否存在
      AdminS.getUserNumByName(newUser.username, function (err, results) { 
        
      console.log('数量',results[0].num);
                   
           
      //登录
      if(newUser.status === 'login'){
          if(results[0]['num'] == 0){
            res.send('3');
            console.log('用户不存在');
          }
          else{
            //获取用户信息
            AdminS.getUserByUserName(newUser.username,function(err,results){

              var newPass = md5.update(newUser.password).digest("hex");
              if(newPass === results[0].password){
                res.send('1');
                console.log('登陆成功');
              }
              else{
                res.send('2');
                console.log('密码错误');
              }
            })
          }
      }
    })
});

//注册请求
router.post('/', function(req, res) {

  // res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //接收参数
    var status,username,password;
    var data = req.body;
    for(var key in data){
      status=JSON.parse(key).status;
      username=JSON.parse(key).username;
      password=JSON.parse(key).password;
    }
    
  
    //创建UserS对象
    var newUser = new AdminS({
      username: username,
      password: password,
      status: status
    });
    console.log('方式:'+newUser.status);
    console.log('用户名:'+newUser.username);    
    console.log('密码:'+newUser.password);

    //密码加密
    var md5 = crypto.createHash("md5");
    var newPass = md5.update(newUser.password).digest("hex");

    AdminS.getUserNumByName(newUser.username,function(err,results){

      if(newUser.username != undefined && newUser.username != ''){

        if(newUser.status === 'register'){
          if(results[0]['num'] == 0){
    
              //向数据库存储数据
              newUser.save({username:newUser.username,userpass:newPass},function(err,results){
                if(err){
                  res.locals.error = err;
                  return;
                }
              })
              //返回响应数据
              res.send('1');
              console.log('注册成功');
          }
          if(results[0]['num'] > 0){
            res.send('2');
            console.log('用户名已存在');
          }
        }

    }

  });

      


});


module.exports = router;