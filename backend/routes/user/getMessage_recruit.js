var express = require('express'),
    router = express.Router(),
    AdminR = require('../../models/user-recruit'),
    crypto = require('crypto'),
    TITLE_REG = '获取recruit信息';
var PublishMe = require('../../method/Ruser').PublishMe;
var GetMsg = require('../../method/Ruser').GetMsg;
var Msg_Publishme = require('../../method/Ruser').Msg_Publishme;
var getImg_recruit = require('../../method/Ruser').getImg_recruit;
var getArticle = require('../../method/admin').getArticle;
var getRelation = require('../../method/Ruser').getRelation;
var getResume = require('../../method/Ruser').getResume;
 
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
      console.log('获取成功');
      res.send(results);
    }
  })

});

router.get('/getpeople',function(req,res){

  res.setHeader("Access-Control-Allow-Origin", "*");
  var sort = req.query.sort;    
  

  AdminR.getPeople(sort,function(err,result){
    // console.log(result);
    if(result){
      res.send(result);
      // console.log(result);
      console.log('查询相关人员成功');
      
    }else{
      res.send('2');
      console.log('查询相关人员失败');
    }
  })


});
//设置注册信息
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
      // console.log(results);
      res.send(results);
      console.log('获取详细信息成功');
    }
  })

});
//获取分类
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
//我发布地
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

//求职人员详情
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

//我发布的详细信息信息获取
router.get('/msg_publishme',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  var id = req.query.id;
  console.log(id);

  Msg_Publishme(id).then(function(data){
    if(data){
      res.send(data);
      console.log('获取成功');
    }
  }).catch(function(err){
    console.log('err');
    res.send('2');
  })

})

//轮播图
router.get('/getimg_recruit',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");

  getImg_recruit().then(function(data){
    if(data){
      res.send(data);
      console.log('获取图片成功');
    }
  }).catch(function(err){
    console.log(err);
    res.send('2');
  })

})

//文章推荐
router.get('/getarticle',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");

  getArticle().then(function(data){
    if(data){
      res.send(data);
      console.log('获取文章成功');
    }
  }).catch(function(err){
    console.log(err);
    res.send('2');
  })

})

//获取简历
router.get('/getResume',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  var r_username = req.query.r_username;
  // console.log(r_username);
  var finaldata=[];

  getRelation(r_username).then(function(data){
    // console.log(data);

      for(var i =0;i<data.length;i++){

        !function(i){
          getResume(data[i].s_username).then(function(result){
          
            if(result){
              finaldata.push(result[0]);
            }else{
              res.send('2');
              console.log('不存在');
            }
            if(i==data.length-1){
              res.send(finaldata);
              console.log('获取职位成功');
            }
          })
        }(i);
       
        
      }

    }).catch(function(err){
    res.send('2');
    console.log(err);
  })

})



module.exports = router;