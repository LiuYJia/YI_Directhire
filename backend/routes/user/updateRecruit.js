var express = require('express'),
    router = express.Router(),
    AdminR = require('../../models/user-recruit'),
    crypto = require('crypto'),
    TITLE_REG = '修改recruit信息';
var Publish = require('../../method/Ruser').Publish;
var AddFeedback = require('../../method/Ruser').AddFeedback;
var GetFeedback = require('../../method/Ruser').GetFeedback;


//修改注册用户信息
router.post('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');

    var data = req.body,username,password,phone,email;

    for(key in data){
        username=JSON.parse(key).username;
        pwd=JSON.parse(key).password;
        phone=JSON.parse(key).phone;
        email=JSON.parse(key).email;
    }
    var updateUser = new AdminR({
        username:username,
        password:pwd,
        phone:phone,
        email:email
    })

    AdminR.getUserNumByName(updateUser.username,function(err,results){
        

        if(err){
            res.locals.error = err;
            return;
        }

        if(results[0]['num'] == 0){
        res.send('2');
        console.log('用户不存在');
        }
        if(results[0]['num'] > 0){
            updateUser.updateData(updateUser.username,{password:updateUser.password,phone:updateUser.phone,email:updateUser.email},function(err,results){
                
                if(err){
                    res.locals.error = err;
                    console.log('修改失败');
                    res.send('2');
                    return;
                }
                if(results.affectedRows){
                    console.log('修改成功');
                    res.send('1');
                }
            })
            
        }
    })
});

//发布职位
router.post('/publish',function(req,res){

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');

    var data = req.body;
    var username,name,sort,num,job,money,school,age,detail,tel;
    for(key in data){
        username=JSON.parse(key).username;
        name=JSON.parse(key).name;
        sort=JSON.parse(key).sort;
        num=JSON.parse(key).num;
        job=JSON.parse(key).job;
        money=JSON.parse(key).money;
        school=JSON.parse(key).school;
        age=JSON.parse(key).age;
        detail=JSON.parse(key).detail;
        tel=JSON.parse(key).tel;
    }
    console.log(username,name,sort,num,job,money,school,age,detail,tel);

    Publish({username:username,name:name,sort:sort,num:num,job:job,money:money,school:school,tel:tel,age:age,detail:detail}).then(function(data){
        if(data){
            res.send('1');
            console.log('发布成功');
        }    
        
        }).catch(function(err){
            res.send('2');
            console.log(err);
        })
})


router.post('/feedback',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');
    
    var username,sort,txt,tel,data=req.body;
    for(key in data){
        username=JSON.parse(key).username;
        sort=JSON.parse(key).sort;
        txt=JSON.parse(key).txt;
        tel=JSON.parse(key).tel;
    }
    console.log(username,sort,txt,tel);

    AddFeedback({username:username,sort:sort,txt:txt,tel:tel}).then(function(data){
        if(data){
            res.send('1');
            console.log('反馈成功');
        }    
        
        }).catch(function(err){
            res.send('2');
            console.log(err);
        })
    
})

module.exports = router;