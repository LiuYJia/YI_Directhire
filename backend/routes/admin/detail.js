var express = require('express');
var router = express.Router();
var detail_R = require('../../method/admin').detail_R;
var detail_S = require('../../method/admin').detail_S;
var Getnear = require('../../method/Suser').Getnear;
router.get('/',function(req,res){
    var name =  req.session.username;
    Promise.all([detail_R(),detail_S(),Getnear()]).then(function(data){
        
        if(data){
            console.log('获取成功');
            res.render('index',{
                title:'信息管理',
                page: 'detail',
                username:name,
                data1:data[0],
                data2:data[1],
                data3:data[2]
            });
        }
        
    }).catch(function(err){
        console.log(err);
    })

   
});

module.exports = router;