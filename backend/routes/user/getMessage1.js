var express = require('express'),
    router = express.Router(),
    AdminR = require('../../models/user-recruit'),
    crypto = require('crypto'),
    TITLE_REG = '获取recruit信息';

router.get('/',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log('getMessage!');

  var param = req.query || req.params;
  console.log('username:'+param.userName);
  var userName = param.userName;

  //获取用户信息
  AdminR.getUserByUserName(userName,function(err,results){
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