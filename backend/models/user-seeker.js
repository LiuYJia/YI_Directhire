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

function AdminS(admin){
    this.username = admin.username;
    this.userpass = admin.userpass;
};
module.exports = AdminS;

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
    AdminS.prototype.save = function save(admin,callback) {

        console.log(admin.username);
        pool.getConnection(function (err, connection) {


            var insertUser_Sql = "INSERT INTO admin_seeker(username,userpass) VALUES(?,?)";

            connection.query(insertUser_Sql, [admin.username, admin.userpass], function (err, result) {

                connection.release();
                if(err){
                    console.log('[INSERT ERROR] - ',err.message);   
                    return;
                }
           
                console.log('----------INSERT-------------');
                console.log('INSERT affectedRows',result.affectedRows);
                console.log('******************************');
                callback(err,result);
            });
        });
    };

    //修改数据
    AdminS.prototype.update = function update(username,updata,callback){
        pool.getConnection(function(err,connection){
            var updateUser_Sql = "UPDATE admin_seeker SET userpass = ?,age = ? WHERE username = ?";
            var userModSql_Params = [update.userpass,updata.age,username];

            connection.query(updateUser_Sql,userModSql_Params,function (err, result) {

                if(err){
                      console.log('[UPDATE ERROR] - ',err.message);   
                      return;
                }
             
               console.log('----------UPDATE-------------');
               console.log('UPDATE affectedRows',result.affectedRows);
               console.log('******************************');
            })
        })
    }


    //根据用户名得到用户数量
    AdminS.getUserNumByName = function getUserNumByName(username, callback) {

        pool.getConnection(function (err, connection) {

            var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM admin_seeker WHERE username = ?";

            connection.query(getUserNumByName_Sql, [username], function (err, result) {
                callback(err,result);

                connection.release();
                if (err) {
                    console.log("getUserNumByName Error: " + err.message);
                    return;
                }

                console.log("invoked[getUserNumByName]");
                //callback(err, result);
            });
        });
    };

    //根据用户名得到用户信息
    AdminS.getUserByUserName = function getUserNumByName(username, callback) {
        pool.getConnection(function (err, connection) {
            var getUserByUserName_Sql = "SELECT * FROM admin_seeker WHERE username = ?";
            var getUserByUserName_Sql1 = "SELECT * FROM admin_seeker";

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