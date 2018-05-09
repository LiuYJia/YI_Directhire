var express = require('express');
var router = express.Router();
var User = require('../../models/user');

router.get('/',function(req,res){

    var name =  req.session.username;

    var seeker,recruit,i=0;

    User.Recruit(function(err,result){
        recruit = result;
        i++;if(i==2){final();}
    });

    User.Seeker(function(err,result){
        seeker = result;
        i++;if(i==2){final();}
    });
    

    function final(){
        res.render('index',{
            title:'用户管理',
            page: 'users',
            username:name,
            data1:recruit,
            data2:seeker
        });
    }       
});

module.exports = router;