var express = require('express');
var router = express.Router();
var checkLogin = require('../middleware/checklogin').checklogin;


module.exports = function (app) {

	app.get('/',checkLogin,function(req,res){
		res.redirect('./admin/home');
	})

    app.use('/admin/login',require('./admin/login'));
    app.use('/admin/register',require('./admin/register'));


    app.use('/admin/all',require('./admin/all'));
    app.use('/admin/home',require('./admin/home'));
    app.use('/admin/master',require('./admin/master'));
    app.use('/admin/file',require('./admin/file'));
    app.use('/admin/recommend',require('./admin/recommend'));
    app.use('/admin/label',require('./admin/label'));
    app.use('/admin/msg',require('./admin/msg'));
    app.use('/admin/users',require('./admin/users'));
    app.use('/admin/detail',require('./admin/detail'));
    app.use('/admin/search',require('./admin/search'));


    app.use('/user/admin-seeker',require('./user/admin-seeker'));
    app.use('/user/admin-recruit',require('./user/admin-recruit'));
    app.use('/user/getMessage_seeker',require('./user/getMessage_seeker'));
    app.use('/user/getMessage_recruit',require('./user/getMessage_recruit'));
    app.use('/user/updateSeeker',require('./user/updateSeeker'));
    app.use('/user/updateRecruit',require('./user/updateRecruit'));
   
    
}




