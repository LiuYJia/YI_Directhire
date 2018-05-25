var express = require('express'),
    router = express.Router(),
    AdminS = require('../../models/user-seeker'),
    crypto = require('crypto'),
    TITLE_REG = '获取seeker信息';

router.get('/',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");
});

module.exports = router;