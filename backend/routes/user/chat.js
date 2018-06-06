var express = require('express'),
    router = express.Router();

router.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.send('5');
});

module.exports = router;