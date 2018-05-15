var express = require('express'),
    router = express.Router(),
    crypto = require('crypto');

var delMaster = require('../../method/admin').delMaster;
var updateMaster = require('../../method/admin').updateMaster;
var addMaster = require('../../method/admin').addMaster;
var delLabel = require('../../method/admin').delLabel;
var addLabel = require('../../method/admin').addLabel;
var delUser_seeker = require('../../method/admin').delUser_seeker;
var delUser_recruit = require('../../method/admin').delUser_recruit;

//编辑管理员页面
router.get('/edit',function(req,res){
    var id = req.query.id;
    var name =  req.session.username;
    res.render('index',{
        title:'信息更改',
        page:'edit',
        username:name,
        id:id,
    })
});

//增加管理员页面
router.get('/addmaster',function(req,res){
    var id = req.query.id;
    var name =  req.session.username;
    res.render('index',{
        title:'增加管理员',
        page:'addmaster',
        username:name,
        id:id,
    })
});

//添加管理员
router.post('/addmaster',function(req,res){
    var name = req.body.name;
    var pwd = req.body.pwd;
    var md5 = crypto.createHash('md5'); 
    var pwd = md5.update(pwd).digest('hex');

    addMaster(name,pwd).then(function(data){
        if(data){
            console.log('增加成功');
            res.redirect('/admin/master');
        }
    }).catch(function(err){
        console.log(err);
    })
});


//更改管理员
router.post('/edit',function(req,res){
    var id = req.body.id;
    var name = req.body.name;
    var pwd = req.body.pwd;
    var md5 = crypto.createHash('md5'); 
    var pwd = md5.update(pwd).digest('hex');

    updateMaster(name,pwd,id).then(function(data){
        if(data){
            console.log('修改成功');
            res.redirect('/admin/master');
        }
    }).catch(function(err){
        console.log(err);
    })
    
});


//删除管理员
router.post('/delMaster',function(req,res){
    var id = req.body['d_master'];

    delMaster(id).then(function(data){
        if(data){
            console.log('删除成功');
            res.redirect('/admin/master');
        }
    }).catch(function(err){
        console.log(err);
    })
});

//删除标签
router.post('/delLabel',function(req,res){
    var id = req.body['d_label'];

    delLabel(id).then(function(data){
        if(data){
            console.log('删除成功');
            res.redirect('/admin/label');
        }
    }).catch(function(err){
        console.log(err);
    })
});
//添加标签
router.post('/addlabel',function(req,res){
    var name = req.body.add_label;

    addLabel(name).then(function(data){
        if(data){
            console.log('增加成功');
            res.redirect('/admin/label');
        }
    }).catch(function(err){
        console.log(err);
    })
});

//删除招聘用户
router.post('/delUser_recruit',function(req,res){
    var id = req.body['r_user'];

    delUser_recruit(id).then(function(data){
        if(data){
            console.log('删除成功');
            res.redirect('/admin/users');
        }
    }).catch(function(err){
        console.log(err);
    })
});

//删除求职用户
router.post('/delUser_seeker',function(req,res){
    var id = req.body['s_user'];

    delUser_seeker(id).then(function(data){
        if(data){
            console.log('删除成功');
            res.redirect('/admin/users');
        }
    }).catch(function(err){
        console.log(err);
    })
});



module.exports = router;