var express = require('express');
var router = express.Router();
var GetFeedback = require('../../method/Ruser').GetFeedback;

router.get('/',function(req,res){
    var u_no =  req.session.username;

    GetFeedback().then(function(result){
        // console.log(data);
        if(result){
            res.render('index',{title:'用户反馈',page:'msg',username:u_no,data:result});
        }    
        
        }).catch(function(err){
            
            console.log(err);
        })

    
});

module.exports = router;