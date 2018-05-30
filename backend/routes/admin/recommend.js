var express = require('express');
var router = express.Router();
var getArticle = require('../../method/admin').getArticle;

router.get('/',function(req,res){
    var u_no =  req.session.username,data;
    getArticle().then(function(result){
        if(result){       
            console.log(result);
            res.render('index',{
                title:'文章推荐',
                page: 'recommend',
                username:u_no,
                data:result
            });
        }
    }).catch(function(err){
            console.log(err);
        }
    );
    
});


module.exports = router;