var mysql = require('mysql');
var DB_NAME = 'nodesample';

var pool  = mysql.createPool({
    host     : '127.0.0.1',
    user     : 'root',
    password : '123456',
    database : 'nodesample'
});

pool.on('connection', function(connection) {  
    connection.query('SET SESSION auto_increment_increment=1'); 
});  

function AdminR(admin){
    this.username = admin.username;
    this.userpass = admin.userpass;
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


            var insertUser_Sql = "INSERT INTO admin_recruit(username,userpass) VALUES(?,?)";

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

    //根据用户名得到用户数量
    AdminR.getUserNumByName = function getUserNumByName(username, callback) {

        pool.getConnection(function (err, connection) {
            var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM admin_recruit WHERE username = ?";

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

        pool.getConnection(function (err, connection) {

            var getUserByUserName_Sql = "SELECT * FROM admin_recruit WHERE username = ?";

            connection.query(getUserByUserName_Sql, [username], function (err, result) {

                callback(err,result);
                //当连接不再使用时，用connection对象的release方法将其归还到连接池中
                connection.release();
                if (err) {
                    console.log("getUserByUserName Error: " + err.message);
                    return;
                }

                if(result[0] != undefined){
                    console.log("invoked[getUserByUserName]");
                    console.log(result[0]);
                }else{
                    console.log('null');
                }

            });
        });
    };
 
});