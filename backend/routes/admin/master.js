var express = require('express');
var router = express.Router();
var User = require('../../models/user');

router.get('/',function(req,res){
    var name =  req.session.username;

    User.Master(function(err,result){

        res.render('index',{
            title:'管理员列表',
            page: 'master',
            username:name,
            data:result
        });

    });

    
});

module.exports = router;