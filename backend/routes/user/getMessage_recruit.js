var express = require('express'),
    router = express.Router(),
    AdminR = require('../../models/user-recruit'),
    crypto = require('crypto'),
    TITLE_REG = '获取recruit信息';
var PublishMe = require('../../method/Ruser').PublishMe;
var GetMsg = require('../../method/Ruser').GetMsg;
 
router.get('/',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");

  var userName = req.query.userName;

  //获取用户信息
  AdminR.getUserByUserName(userName,function(err,results){
    if(err){
        res.locals.error = err;
        res.send('2');
        return;
    }
    if(results){
      console.log(results);
      res.send(results);
    }
  })

});

router.get('/getpeople',function(req,res){

  res.setHeader("Access-Control-Allow-Origin", "*");
  var sort = req.query.sort;    

  AdminR.getPeople(sort,function(err,result){
    console.log(result);
    if(result){
      res.send(result);
      console.log('查询相关人员成功');
    }else{
      res.send('2');
      console.log('查询相关人员失败');
    }
  })


});

router.get('/settingMsg',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");

  userName = req.query.username;

  AdminR.detailMsg(userName,function(err,results){
    if(err){
        res.locals.error = err;
        res.send('2');
        return;
    }
    if(results){
      console.log(results);
      res.send(results);
      console.log('获取详细信息成功');
    }
  })

});

router.get('/getSort',function(req,res){

  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'content-type');

  AdminR.Label(function(err,result){

      if(result){
          console.log('获取标签成功');
          res.send(result);
      }else{
          console.log(err);
          res.send('2');
      }
  })
  
});

router.get('/publishme',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'content-type');
  username = req.query.username;
  console.log(username);
  PublishMe(username).then(function(data){
    
    if(data){
      console.log('获取发布职位成功');
      console.log(data);
      res.send(data);
    }    
    }).catch(function(err){
      console.log(err);
      res.send('2');
    })

})

router.get('/getmsg',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  var username = req.query.username;

  GetMsg(username).then(function(result){
    if(result){
      console.log('获取成功');
      res.send(result);
    }
  }).catch(function(err){
    console.log('err');
    res.send('2');
  })

})

module.exports = router;