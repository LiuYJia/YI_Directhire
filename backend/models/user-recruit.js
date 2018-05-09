var mysql = require('mysql');

var database = require('./database');
var pool = mysql.createPool(database.pool);
//var AdminR = database.User;
var DB_NAME = database.name;

pool.on('connection', function(connection) {  
    connection.query('SET SESSION auto_increment_increment=1'); 
});  

function AdminR(admin){
    this.username = admin.username;
    this.userpass = admin.password;
};
module.exports = AdminR;

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
    AdminR.prototype.save = function save(admin,callback) {

        console.log(admin.username);
        pool.getConnection(function (err, connection) {


            var insertUser_Sql = "INSERT INTO user_recruit(username,userpass) VALUES(?,?)";

            connection.query(insertUser_Sql, [admin.username, admin.userpass], function (err, result) {

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

    //删除数据
    AdminR.prototype.deleteData = function deleteData(username,callback){
        pool.getConnection(function(err,connection){
            var deleteUser_Sql = "DELETE FROM user_recruit WHERE username = ?";
            
            console.log('111111111111111111'+username);

            connection.query(deleteUser_Sql, [username] , function (err, result) {
                
                if(err){
                    console.log('[DELETE ERROR] - ',err.message);
                    return;
                }

                callback(err,result);
           
                console.log('----------DELETE-------------');
                console.log('DELETE affectedRows',result.affectedRows);
                console.log('******************************');
                connection.release();
            });
        })
    }

    //根据用户名得到用户数量
    AdminR.getUserNumByName = function getUserNumByName(username, callback) {

        pool.getConnection(function (err, connection) {
            var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM user_recruit WHERE username = ?";

            connection.query(getUserNumByName_Sql, [username], function (err, result) {

                connection.release();
                if (err) {
                    console.log("getUserNumByName Error: " + err.message);
                    return;
                }

                console.log("invoked[getUserNumByName]");
                callback(err, result);
            });
        });
    };

    //根据用户名得到用户信息
    AdminR.getUserByUserName = function getUserNumByName(username, callback) {
        console.log('use database admin-recruit');
        pool.getConnection(function (err, connection) {
            var getUserByUserName_Sql = "SELECT * FROM user_recruit WHERE username = ?";
            var getUserByUserName_Sql1 = "SELECT * FROM user_recruit";

            //如果username存在，则返回相关用户信息
            if(username != undefined){
                connection.query(getUserByUserName_Sql, [username], function (err, result) {  
                    if (err) {
                        console.log("getUserByUserName Error: " + err.message);
                        return;
                    }
                    console.log("invoked[getUserByUserName]");
                    callback(err, result);
    
                    //当连接不再使用时，用connection对象的release方法将其归还到连接池中
                    connection.release();
                });
            }
            //如果username不存在，则返回全部用户信息
            else{
                connection.query(getUserByUserName_Sql1, function (err, result) {  
                    if (err) {
                        console.log("getUserByUserName Error: " + err.message);
                        return;
                    }
                    console.log("invoked[getUserByUserName]");
                    callback(err, result);
    
                    //当连接不再使用时，用connection对象的release方法将其归还到连接池中
                    connection.release();
                });
            }
        });
    };
 
});