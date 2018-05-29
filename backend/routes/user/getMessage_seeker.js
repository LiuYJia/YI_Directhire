var express = require('express'),
    router = express.Router(),
    crypto = require('crypto'),
    TITLE = '获取seeker信息';

var getSort = require('../../method/Suser').getSort;
var getRecruit = require('../../method/Suser').getRecruit;
var detail_Recruit = require('../../method/Suser').detail_Recruit;
var set_Recruit = require('../../method/Suser').set_Recruit;
var ResumeMsg = require('../../method/Suser').ResumeMsg;
var getImg_seeker = require('../../method/Suser').getImg_seeker;
var getCollect_seeker = require('../../method/Suser').getCollect_seeker;
var getCollect_msg = require('../../method/Suser').getCollect_msg;
var Search = require('../../method/Suser').Search;
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
  var sort = req.query.sort;
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
  var id = req.query.id;
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
  var username = req.query.username;
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
  var username = req.query.username;
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

//获取收藏列表
router.get('/getCollect',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  var s_username = req.query.s_username;
  var finaldata=[];

  getCollect_seeker(s_username).then(function(data){

      for(var i =0;i<data.length;i++){
        !function(i){
          getCollect_msg(data[i].r_username).then(function(result){
          
            if(result){
              finaldata.push(result[0]);
            }else{
              res.send('2');
              console.log('不存在');
            }
            if(i==data.length-1){
              res.send(finaldata);
              console.log('获取收藏成功');
            }
          })
        }(i);               
      }

    }).catch(function(err){
    res.send('2');
    console.log(err);
  })
})
router.get('/search',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");

  var keyword = req.query.keyword;
  // console.log(JSON.stringify(keyword));
  Search(keyword).then(function(data){
    if(data){
      res.send(data);
      console.log('搜索成功');
    }
  }).catch(function(err){
    res.send('2');
    console.log(err);
  });


})

module.exports = router;