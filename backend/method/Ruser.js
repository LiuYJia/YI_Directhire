var mysql = require('mysql');
var database = require('../models/database');
var pool = mysql.createPool(database.pool);

module.exports = {

    Publish:function Publish(data){
     
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var Publish_sql = 'insert into msg_recruit(username,num,sort,job,money,school,name,tel,age,detail) values (?,?,?,?,?,?,?,?,?,?)';
                connection.query(Publish_sql,[data.username,data.num,data.sort,data.job,data.money,data.school,data.name,data.tel,data.age,data.detail],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },

    PublishMe:function PublishMe(username){

        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var PublishMe_sql = 'select * from msg_recruit where username = ?';
                connection.query(PublishMe_sql,[username],function(err,data){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(data);
                    }
                    connection.release();
                })
            })
        })

    },

    AddFeedback:function AddFeedback(data){

        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var AddFeedback_sql = 'insert into feedback(username,sort,txt,tel) values (?,?,?,?)';
                connection.query(AddFeedback_sql,[data.username,data.sort,data.txt,data.tel],function(err,data){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(data);
                    }
                    connection.release();
                })
            })
        })

    },

    GetFeedback:function GetFeedback(){

        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var GetFeedback_sql = 'select * from feedback';
                connection.query(GetFeedback_sql,function(err,data){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(data);
                    }
                    connection.release();
                })
            })
        })

    },

    GetMsg:function GetMsg(username){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var GetMsg_sql = 'select * from msg_recruit where username = ?';
                connection.query(GetMsg_sql,username,function(err,data){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(data);
                    }
                    connection.release();
                })
            })
        })
    }

}