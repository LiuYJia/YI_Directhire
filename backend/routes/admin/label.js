var express = require('express');
var router = express.Router();
var User = require('../../models/user');

router.get('/',function(req,res){
    var name =  req.session.username;
    User.Label(function(err,result){
        console.log(result);

        res.render('index',{
            title:'标签管理',
            page:'label',
            username:name,
            data:result
        });

    })
    
});

module.exports = router;