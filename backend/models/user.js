var mysql = require('mysql');
var database = require('./database');
var pool = mysql.createPool(database.pool);
var DB_NAME = database.name;

pool.on('connection', function(connection) {  
    connection.query('SET SESSION auto_increment_increment=1'); 
});  

function User(user){
    this.username = user.username;
    this.userpass = user.userpass;
}

module.exports = User;

pool.getConnection(function(err, connection) {

    var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function (err) {
         if (err) {
            console.log("USE Error: " + err.message);
            return;
         }
         console.log('USE succeed');
    });

    //保存数据
    User.prototype.save = function save(callback) {

        var user = {
            username: this.username,
            userpass: this.userpass
        };
        console.log(user.username);
        pool.getConnection(function (err, connection) {

            var insertUser_Sql = "INSERT INTO admin(id,username,userpass) VALUES(0,?,?)";
            connection.query(insertUser_Sql, [user.username, user.userpass], function (err, result) {

                connection.release();
                if (err) {
                    console.log("insertUser_Sql Error: " + err.message);
                    return;
                }

                console.log("invoked[save]");
                callback(err, result);
            });
        });
    };



    //根据用户名得到用户数量
    User.getUserNumByName = function getUserNumByName(username, callback) {

        pool.getConnection(function (err, connection) {
            var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM admin WHERE username = ?";

            connection.query(getUserNumByName_Sql, [username], function (err, result) {

                connection.release();
                if (err) {
                    console.log("getUserNumByName Error: " + err.message);
                    return;
                }

                console.log("invoked[getUserNumByName]");
                console.log('num');
                callback(err, result);
            });
        });
    };


    //根据用户名得到用户信息
    User.getUserByUserName = function getUserNumByName(username, callback) {
        pool.getConnection(function (err, connection) {
            var getUserByUserName_Sql = "SELECT * FROM admin WHERE username = ?";

            connection.query(getUserByUserName_Sql, [username], function (err, result) {

                connection.release();
                if (err) {
                    console.log("getUserByUserName Error: " + err.message);
                    return;
                }

                console.log("invoked[getUserByUserName]");
                callback(err, result);
            });
        });
    };

    //统计求职者注册总人数
    User.totalSeekerNum = function totalSeekerNum(callback){
        pool.getConnection(function(err,connection){

            var totalSeekerNum_Sql = "SELECT COUNT(*) AS num_seeker FROM user_seeker";
            connection.query(totalSeekerNum_Sql,function(err,result){
                connection.release();
                if(err){
                    console.log("totalSeekerNum Error:" + err.message);
                    return;
                }

                console.log(result);               
                callback(err,result);
            });
        });
    };

    //统计招聘者注册总人数
    User.totalRecruitNum = function totalRecruitNum(callback){

        pool.getConnection(function(err,connection){
            var totalRecruitNum_sql = "select count(*) as num_recruit from user_recruit";
            connection.query(totalRecruitNum_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("totalRecruitNum Error:" + err.message);
                    return;
                }
                console.log(result);
                callback(err,result);
            });
        });
    }

    //统计男职员人数
    User.totalManNum = function totalManNum(callback){

        pool.getConnection(function(err,connection){
            var totalManNum_sql = "select count(sex) as num_man from user_seeker  where sex='男'";
            connection.query(totalManNum_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("totalManNum Error:" + err.message);
                    return;
                }
                console.log(result);
                callback(err,result);
            });
        });
    }


    //统计女职员人数
    User.totalWomanNum = function totalWomanNum(callback){

        pool.getConnection(function(err,connection){
            var totalWomanNum_sql = "select count(sex) as num_woman from user_seeker  where sex='女'";
            connection.query(totalWomanNum_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("totalWomanNum Error:" + err.message);
                    return;
                }
                console.log(result);
                callback(err,result);
            });
        });
    }

    // 管理员列表
    User.Master = function Master(callback){

        pool.getConnection(function(err,connection){
            var Master_sql = "select * from admin";
            connection.query(Master_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("Master Error:" + err.message);
                    return;
                }
                callback(err,result);
            });
        });
    }
    User.Master_del = function Master_del(username,callback){

        pool.getConnection(function(err,connection){
            var Master_del_sql = "select * from admin where username = ?";
            connection.query(Master_del_sql,[username],function(err,result){
                connection.release();

                if(err){
                    console.log("Master_del Error:" + err.message);
                    return;
                }
                callback(err,result);
            });
        });
    }
    //删除管理员

    //求职人员列表
    User.Seeker = function Seeker(callback){

        pool.getConnection(function(err,connection){
            var Seeker_sql = "select * from user_seeker";
            connection.query(Seeker_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("Seeker Error:" + err.message);
                    return;
                }
                callback(err,result);
            });
        });
    }
    
    //招聘人员列表
    User.Recruit = function Recruit(callback){

        pool.getConnection(function(err,connection){
            var Recruit_sql = "select * from user_recruit";
            connection.query(Recruit_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("Recruit Error:" + err.message);
                    return;
                }
                callback(err,result);
            });
        });
    }
 
    //标签列表
    User.Label = function Label(callback){

        pool.getConnection(function(err,connection){
            var Label_sql = "select * from label";
            connection.query(Label_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("Label Error:" + err.message);
                    return;
                }               
                callback(err,result);
            });
        });

    }


    User.seeekerall = function(callback){
        pool.getConnection(function(err,connection){
            var seekerall_sql = "select * from seeker";
            connection.query(seekerall_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("seekerall Error:" + err.message);
                    return;
                }     
                        
                callback(err,result);
            });
        });

    }

});