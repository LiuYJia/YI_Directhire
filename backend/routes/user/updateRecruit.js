var express = require('express'),
    router = express.Router(),
    AdminR = require('../../models/user-recruit'),
    crypto = require('crypto'),
    TITLE_REG = '修改recruit信息';
var Publish = require('../../method/Ruser').Publish;
var AddFeedback = require('../../method/Ruser').AddFeedback;
var GetFeedback = require('../../method/Ruser').GetFeedback;
var Updatepubme = require('../../method/Ruser').Updatepubme;
var Delmsg = require('../../method/Ruser').Delmsg;
var imgSave = require('../../method/Ruser').imgSave;
var delResume = require('../../method/Ruser').delResume;
var Collect_recruit = require('../../method/Ruser').Collect_recruit;
var delCollect = require('../../method/Ruser').delCollect;

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

//用户反馈
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

//修改已发布信息
router.post('/updatepubme',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');

    var id,job,sort,name,num,money,age,school,tel,detail,data=req.body;
    for(key in data){
        id = JSON.parse(key).id;
        job = JSON.parse(key).job;
        sort = JSON.parse(key).sort;
        name = JSON.parse(key).name;
        num = JSON.parse(key).num;
        money = JSON.parse(key).money;
        age = JSON.parse(key).age;
        school = JSON.parse(key).school;
        tel = JSON.parse(key).tel;
        detail = JSON.parse(key).detail;
    }

    Updatepubme({id:id,job:job,sort:sort,name:name,num:num,money:money,age:age,school:school,tel:tel,detail:detail}).then(function(data){
        if(data.affectedRows){            
            res.send('1');
            console.log('修改成功');
        }
    }).catch(function(err){
        console.log('修改失败');
        res.send('2');
    })

  
})

//删除已发布职位
router.post('/delmsg',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');

    var id,data=req.body;
    for(key in data){
        id=JSON.parse(key).id;
    }
    Delmsg(id).then(function(data){
        if(data){
            res.send('1');
            console.log('删除成功');
        }
    }).catch(function(err){
        console.log('删除失败');
        res.send('2');
    })

});
//删除简历
router.post('/delResume',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');

    var data = req.body,s_username;
    for(key in data){
        s_username = JSON.parse(key).s_username;
    }
    delResume(s_username).then(function(data){
        if(data != 0){
            res.send('1');
            console.log('删除成功');
        }
    }).catch(function(err){
        res.send('2');
        console.log(err);
    })
})
//收藏
router.post('/Collect_recruit',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');
    var r_username,s_id,data = req.body;
    for(key in data){
        r_username = JSON.parse(key).r_username;
        s_id = JSON.parse(key).s_id;
    }
    Collect_recruit(r_username,s_id).then(function(data){
        if(data != 0){
            res.send('1');
            console.log('收藏成功');
        }
    }).catch(function(err){
        res.send('2');
        console.log(err);
    })
})

//取消收藏
router.post('/delCollect',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');
    var s_id,data = req.body;
    for(key in data){
        s_id = JSON.parse(key).s_username;
    }

    delCollect(s_id).then(function(data){
        if(data != 0){
            res.send('1');
            console.log('取消成功');
        }
    }).catch(function(err){
        res.send('2');
        console.log(err);
    })
})

//头像上传
router.post('/upload',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');

    var username;
    var form = new formidable.IncomingForm();   
        form.encoding = 'utf-8';        
        form.uploadDir = 'public' + '/imgRecruit/';     
        form.keepExtensions = true;     
        form.maxFieldsSize = 2 * 1024 * 1024;   

    form.parse(req, function(err, fields, files) {
        username = fields["username"];
        console.log(username);

        if(err){
            return res.send('2')
        }     
       
        var extName = '';  
        switch (files.img_recruit.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;         
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;         
        }

        if(extName.length == 0){
              return res.send('0');       
              console.log('只支持png和jpg格式图片');          
        }

        var newName = Math.random() + '.' + extName;
        var newPath = form.uploadDir + newName;
        var savePath = '/imgRecruit/'+ newName;
        fs.renameSync(files.img_recruit.path, newPath);

        imgSave(username,savePath).then(function(data){
            if(data != 0){                
                console.log('上传成功');
                res.send('1');
            }
        }).catch(function(err){
            res.send('2');
            console.log(err);
        });

    });

})

  

module.exports = router;