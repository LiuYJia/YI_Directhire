var express = require('express'),
    router = express.Router(),
    AdminS = require('../../models/user-seeker'),
    crypto = require('crypto'),
    TITLE_REG = '删除seeker用户';

router.get('/',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");

  var param = req.query || req.params;
  console.log('username:'+param.userName);
  var userName = param.userName;

  var deleteUser = new AdminS({
    username: userName
  })

  AdminS.getUserNumByName(deleteUser.username,function(err,results){
    if(userName != undefined){
      if(err){
        res.locals.error = err;
        return;
      }
      if(results != 0){
        deleteUser.deleteData(deleteUser.username,function(err,results){
          if(err){
            res.locals.error = err;
            return;
          }
          res.send('0');//删除成功
        })
      }
      else{
        res.send('1');//用户不存在
      }
    }
    else{
      res.send('2')//请输入参数
    }
    
    console.log('results:'+results);
  })
});

module.exports = router;