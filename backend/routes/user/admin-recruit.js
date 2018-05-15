var express = require('express'),
    router = express.Router(),
    AdminR = require('../../models/user-recruit'),
    crypto = require('crypto');

router.get('/', function(req, res) {
    // res.setHeader("Access-Control-Allow-Origin", "*");


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
    //let md5 = crypto.createHash("md5");
    //let newPas = md5.update(userPwd).digest("hex");
  
    //创建UserS对象
    var newUser = new AdminR({
      username: userName,
      password: userPwd,
      status: status
    });

    //检查用户名是否存在
    AdminR.getUserNumByName(newUser.username, function (err, results) { 
      
    console.log('数量',results[0].num);
                 
         
    //登录
    if(newUser.status === 'login'){
        if(results[0]['num'] == 0){
          res.send('3');
          console.log('用户不存在');
        }
        else{
          //获取用户信息
          AdminR.getUserByUserName(newUser.username,function(err,results){
            // console.log('用户名'+newUser.username);
            // console.log('密码1:'+newUser.password);
            // console.log('密码2:'+results[0].password);
            if(newUser.password === results[0].password){
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
    //密码加密
    //let md5 = crypto.createHash("md5");
    //let newPas = md5.update(userPwd).digest("hex");
  
    //创建UserS对象
    var newUser = new AdminR({
      username: username,
      password: password,
      status: status
    });
    console.log('方式:'+newUser.status);
    console.log('用户名:'+newUser.username);    
    console.log('密码:'+newUser.password);


    AdminR.getUserNumByName(newUser.username,function(err,results){

      if(newUser.username != undefined && newUser.username != ''){

        if(newUser.status === 'register'){
          if(results[0]['num'] == 0){
    
              //向数据库存储数据
              newUser.save({username:newUser.username,userpass:newUser.password},function(err,results){
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