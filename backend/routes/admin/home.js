var express = require('express'),
    router = express.Router(),
    User = require('../../models/user');

router.get('/',function(req,res){
    var name =  req.session.username;
    console.log("xxx");

    var num_recruit,num_seeker,num_man,num_woman;
    var ii=0;
    User.totalRecruitNum(function(err,result){
        num_recruit = JSON.stringify(result[0].num_recruit);
        ii++;if(ii==4){test();}    
    });           
    //console.log(num_recruit+'qqqqqq');  

    User.totalSeekerNum(function(err,result){
        num_seeker = JSON.stringify(result[0].num_seeker);
        ii++;if(ii==4){test();}    
    });

    User.totalManNum(function(err,result){

        num_man =  JSON.stringify(result[0].num_man);  
        ii++;if(ii==4){test();}    
   
    });

    User.totalWomanNum(function(err,result){
        num_woman =  JSON.stringify(result[0].num_woman); 
        ii++;if(ii==4){test();}        
    });
    
    function test(){
        console.log('33333',num_seeker,num_recruit,num_man,num_woman);
        res.render('index',{   
            title:'注册人员分布',
            page: 'home',
            username:name,
            data_recruit:num_recruit,
            data_seeker:num_seeker,
            data_man:num_man,
            data_woman:num_woman,
        });
    }    
   
});

module.exports = router;