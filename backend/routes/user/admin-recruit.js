var express = require('express'),
    router = express.Router(),
    AdminR = require('../../models/user-recruit'),
    crypto = require('crypto'),
    TITLE_REG = '注册recruit';

router.get('/', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    console.log(req.body);
    
    //接收参数
    let md5 = crypto.createHash("md5");
    var param = req.query || req.params;
    console.log('username:'+param.userName);
    console.log('userpassword'+param.userPwd);
    var userName = param.userName;
    var userPwd = param.userPwd;
    let newPas = md5.update(password).digest("hex");
  
    //创建UserS对象
    var newUser = new AdminR({
      username: userName,
      userpass: newPas
    });

    //检查用户名是否存在
    AdminR.getUserNumByName(newUser.username, function (err, results) { 
      
      console.log(results[0]['num']);

      if(results[0]['num'] == 0){
        console.log('success!');

        //返回响应数据
        res.send('0');

        //向数据库存储数据
        newUser.save({username:newUser.username,userpass:newUser.userpass},function(err,result){
          if(err){
            res.locals.error = err;
            return;
          }
        })        
        
      }

      if(results[0]['num'] > 0){
        res.send('1');
        console.log('用户名已存在');
      }
    
    });
});

module.exports = router;