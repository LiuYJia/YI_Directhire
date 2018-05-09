var express = require('express');
var router = express.Router();


module.exports = function (app) {

    app.use('/',require('./admin/index'));
    app.use('/login',require('./admin/login'));
    app.use('/register',require('./admin/register'));
    app.use('/logout',require('./admin/logout'));

    app.use('/admin/home',require('./admin/home'));
    app.use('/admin/master',require('./admin/master'));
    app.use('/admin/file',require('./admin/file'));
    app.use('/admin/recommend',require('./admin/recommend'));
    app.use('/admin/label',require('./admin/label'));
    app.use('/admin/msg',require('./admin/msg'));

    app.use('/user/user-seeker',require('./user/user-seeker'));
    app.use('/user/user-recruit',require('./user/user-recruit'));
    app.use('/user/getMessage-seeker',require('./user/getMessage_seeker'));
    app.use('/user/getMessage-recruit',require('./user/getMessage_recruit'));
    app.use('/user/deleteSeeker',require('./user/deleteSeeker'));
    app.use('/user/deleteRecruit',require('./user/deleteRecruit'));

    app.use('/user/adduser',require('./user/adduser'));
   

}




