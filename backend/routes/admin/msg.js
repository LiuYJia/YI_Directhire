const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    let u_no =  req.session.username;
    res.render('index',{title:'msg',page:'msg',username:u_no});
    
});

module.exports = router;