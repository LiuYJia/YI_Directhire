var express = require('express');
var router = express.Router();
var GetFeedback = require('../../method/Ruser').GetFeedback;
var num_Feedback = require('../../method/admin').num_Feedback;

router.get('/',function(req,res){

    GetFeedback().then(function(result){
        var u_no =  req.session.username;
        if(result){
            res.render('index',{
                title:'用户反馈',
                page:'msg',
                username:u_no,
                data:result,
                pagecount:8,
                pagesize:5,
                currentpage:1,
            });
        }    
        
        }).catch(function(err){
            
            console.log(err);
        })

    
});


module.exports = router;