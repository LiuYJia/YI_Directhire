var express = require('express'),
    router = express.Router(),
    AdminS = require('../../models/user-seeker'),
    crypto = require('crypto');

router.post('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');
});

module.exports = router;