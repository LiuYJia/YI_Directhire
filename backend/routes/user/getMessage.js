var express = require('express'),
    router = express.Router(),
    AdminS = require('../../models/user-seeker'),
    crypto = require('crypto'),
    TITLE_REG = '获取seeker信息';

router.get('/',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log('getMessage!');

  var param = req.query || req.params;
  console.log('username:'+param.userName);
  var userName = param.userName;
  
  //获取用户信息
  AdminS.getUserByUserName(userName,function(err,results){
    if(err){
        res.locals.error = err;
        return;
    }
    if(results){
      console.log(results);
      res.send(results[0]);
    }
  })

});

module.exports = router;