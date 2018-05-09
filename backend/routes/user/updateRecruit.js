var express = require('express'),
    router = express.Router(),
    AdminR = require('../../models/user-recruit'),
    crypto = require('crypto'),
    TITLE_REG = '修改recruit信息';

router.get('/',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log('getMessage!');

  var param = req.query || req.params;
  console.log('username:'+param.userName);
  var userName = param.userName,
      property = param.property,
      updata = param.updata;
      
      console.log(userName,property,updata);

  var updateUser = new AdminR({
      username:userName
  })

  //获取用户信息
  AdminR.getUserNumByName(updateUser.username,function(err,results){
    
    if(err){
        res.locals.error = err;
        return;
    }

    if(results[0]['num'] == 0){
      res.send('1');
    }
    if(results[0]['num'] > 0){
        res.send('该用户存在');

        //判断用户的属性
        switch(property){
            case 'userPwd':
              var updateMessage = new AdminR({
                  password:updata
              });
              break;
            case 'age':
              var updateMessage = new AdminR({
                  age:updata
              })
              break;
        }
        console.log('lllll'+updateMessage);

        updateMessage.updateData(updateUser.username,property,updateMessage,function(err,results){
            if(err){
                res.locals.error = err;
                res.send('2');
                return;
            }
            if(results){
                res.send('0');
            }
        })
        
    }
  })
});

module.exports = router;