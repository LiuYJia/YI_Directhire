const express = require('express');
const router = express.Router();
//var check = require('./index');

router.get('/',function(req,res){
    let u_no =  req.session.username;
    res.render('index',{title:'home',page: 'home',username:u_no});
    
    console.log('xxxxx'+u_no);
});

module.exports = router;