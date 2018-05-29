var express = require('express'),
    router = express.Router(),
    crypto = require('crypto'),
    TITLE = '获取seeker信息';

var getSort = require('../../method/Suser').getSort;
var getRecruit = require('../../method/Suser').getRecruit;
var detail_Recruit = require('../../method/Ruser').detail_Recruit;
var set_Recruit = require('../../method/Ruser').set_Recruit;
var ResumeMsg = require('../../method/Ruser').ResumeMsg;
var getImg_seeker = require('../../method/Ruser').getImg_seeker;
//获取分类
router.get('/getsort',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");
  getSort().then(function(data){
    if(data){
      res.send(data);
      console.log('获取分类成功');
    }
  }).catch(function(err){
    res.send('2');
    console.log(err);
  });

});
//获取相关职业
router.get('/getRecruit',function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  getRecruit(sort).then(function(data){
    if(data){
      res.send(data);
      console.log('获取相关职业成功');
    }
  }).catch(function(err){
    console.log(err);
    res.send('2');   
  });
})
//获取职业详情
router.get('/detail_Recruit',function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  detail_Recruit(id).then(function(data){
    if(data){
      res.send(data);
    }
  }).catch(function(err){
    res.send('2');
    console.log(err);
  });

})
//注册信息
router.get('/set_Recruit',function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  set_Recruit(username).then(function(data){
    if(data){
      res.send(data);
    }
  }).catch(function(err){
    res.send('2');
    console.log(err);
  });
})
//简历详情
router.get('/ResumeMsg',function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  ResumeMsg(username).then(function(data){
    if(data){
      res.send(data);
    }
  }).catch(function(err){
    res.send('2');
    console.log(err);
  });
})
//轮播图
router.get('/getImg_seeker',function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  getImg_seeker().then(function(data){
    if(data){
      res.send(data);
    }
  }).catch(function(err){
    res.send('2');
    console.log(err);
  });
})

module.exports = router;