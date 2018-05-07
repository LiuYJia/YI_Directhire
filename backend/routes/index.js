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

    app.use('/user/admin-seeker',require('./user/admin-seeker'));
    app.use('/user/admin-recruit',require('./user/admin-recruit'));
    app.use('/user/getMessage',require('./user/getMessage'));
    app.use('/user/getMessage1',require('./user/getMessage1'));

    app.use('/user/adduser',require('./user/adduser'));
   

}




