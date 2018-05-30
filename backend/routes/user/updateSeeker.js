var express = require('express'),
    router = express.Router(),
    crypto = require('crypto');
var UpdateSet = require('../../method/Suser').UpdateSet;
var UpdateResume = require('../../method/Suser').UpdateResume;
var UpdateImg = require('../../method/Suser').UpdateImg;
var SendResume = require('../../method/Suser').SendResume;
var Collect_seeker = require('../../method/Suser').Collect_seeker;
var delCollect = require('../../method/Suser').delCollect;

//修改注册信息
router.post('/UpdateSet',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');
    var data = req.body,password,phone,email,username;
    for(key in data){
        password = JSON.parse(key).password;
        phone = JSON.parse(key).phone;
        email = JSON.parse(key).email;
        username = JSON.parse(key).username;
    };
    UpdateSet({password:password,phone:phone,email:email},username).then(function(data){
        if(data){
          res.send('1');
        }
      }).catch(function(err){
        res.send('2');
        console.log(err);
      });
});
//更新简历信息
router.post('/UpdateResume',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');
    var data = req.body,sex,sort,job,money,school,tel,age,detail,name,username;
    for(key in data){
        sex = JSON.parse(key).sex;
        sort = JSON.parse(key).sort;
        job = JSON.parse(key).job;
        money = JSON.parse(key).money;
        school = JSON.parse(key).school;
        tel = JSON.parse(key).tel;
        age = JSON.parse(key).age;
        detail = JSON.parse(key).detail;
        name = JSON.parse(key).name;
        username = JSON.parse(key).username;
    };
    UpdateResume({sex:sex,sort:sort,job:job,money:money,school:school,tel:tel,age:age,detail:detail,name:name},username).then(function(data){
        if(data){
          res.send('1');
        }
      }).catch(function(err){
        res.send('2');
        console.log(err);
      });
});

//投递简历
router.post('/SendResume',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');
    var r_username,s_username,data = req.body;
    for(key in data){
        r_username = JSON.parse(key).r_username;
        s_username = JSON.parse(key).s_username;
    }
    SendResume(r_username,s_username).then(function(data){
        if(data != 0){
            res.send('1');
            console.log('投递成功');
        }
    }).catch(function(err){
        res.send('2');
        console.log(err);
    })
})

//收藏
router.post('/Collect_seeker',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');
    var r_id,s_username,data = req.body;
    for(key in data){
        r_id = JSON.parse(key).r_id;
        s_username = JSON.parse(key).s_username;
    }
    Collect_seeker(s_username,r_id).then(function(data){
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
    var r_id,data = req.body;
    for(key in data){
        r_id = JSON.parse(key).r_id;
    }

    delCollect(r_id).then(function(data){
        if(data != 0){
            res.send('1');
            console.log('取消成功');
        }
    }).catch(function(err){
        res.send('2');
        console.log(err);
    })
})


//更新头像
router.post('/UpdateImg',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');

    var username;
    var form = new formidable.IncomingForm();   
        form.encoding = 'utf-8';        
        form.uploadDir = 'public' + '/imgSeeker/';     
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
        var savePath = '/imgSeeker/'+ newName;
        fs.renameSync(files.img_recruit.path, newPath);

        UpdateImg(username,savePath).then(function(data){
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