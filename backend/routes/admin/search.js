var express = require('express')
    router = express.Router();

router.get('/',function(req,res){
    var name =  req.session.username;
    res.render('index',{
        title:'搜    索',
        page:'search',
        username:name
    });
});

module.exports = router;