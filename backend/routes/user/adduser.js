const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    let u_no =  req.session.username;
    res.render('index',{title:'增加用户',page: 'adduser',username:u_no});
    
    console.log('xxxxx'+u_no);
});

module.exports = router;