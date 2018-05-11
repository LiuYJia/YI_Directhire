var express = require('express'),
    router = express.Router(),
    AdminR = require('../../models/user-recruit'),
    crypto = require('crypto'),
    TITLE_REG = '注册';

router.get('/', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    console.log(req.body);

    //接收参数
    var param = req.query || req.params;

    console.log('param::::::'+param);
    console.log('username:'+param.userName);
    console.log('userpassword'+param.userPwd);
    var userName = param.userName;
    var userPwd = param.userPwd;
    var status = param.status;

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
      
      console.log(results[0]['num']);

        if(newUser.username != undefined && newUser.username != ''){
          //注册用户
          if(newUser.status === 'register'){
            if(results[0]['num'] == 0){
              console.log('success!');
      
                //向数据库存储数据
                newUser.save(this,function(err,result){
                  if(err){
                    res.locals.error = err;
                    return;
                  }
               })
                //返回响应数据
                res.send('0');
            }
            if(results[0]['num'] > 0){
              res.send('1');
              console.log('用户名已存在');
            }
          }
          //登录
          else if(newUser.status === 'login'){
              if(results[0]['num'] == 0){
                res.send('该用户不存在')
              }
              else if(results[0]['num'] > 0){
                //获取用户信息
                AdminR.getUserByUserName(newUser.username,function(err,results){
                  console.log(results);
                  console.log(results[0]['password']);
                  if(newUser.password === results[0]['password']){
                    res.send('登录成功');
                  }
                  else{
                    res.send('用户名或密码不正确');
                  }
                })
              }
          }
        }
        else{
          res.end('input parameter');
        }
    });
});

module.exports = router;