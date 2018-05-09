var express = require('express'),
    router = express.Router(),
    AdminS = require('../../models/user-seeker'),
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

    //密码加密
    //let md5 = crypto.createHash("md5");
    //let newPas = md5.update(userPwd).digest("hex");
  
    //创建UserS对象
    var newUser = new AdminS({
      username: userName,
      password: userPwd
    });

    //检查用户名是否存在
    AdminS.getUserNumByName(newUser.username, function (err, results) { 
      
      console.log(results[0]['num']);

        if(newUser.username != ''){
          if(results[0]['num'] == 0){
            console.log('success!');
    
            //向数据库存储数据
            newUser.save({username:newUser.username,userpass:newUser.password},function(err,result){
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
        else{
          res.end('请传入参数');
        }
    });
});

module.exports = router;