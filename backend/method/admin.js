
var mysql = require('mysql');
var database = require('../models/database');
var pool = mysql.createPool(database.pool);

module.exports = {

    //添加标签
    addLabel:function addLabel(name){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                // connection.query('alter table label drop id');
                // connection.query('alter table label add id int not null primary key auto_increment first');
                connection.query("insert into label(name) values (?)",name,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                });
            })
        })

    },

    //删除标签
    delLabel:function delLabel(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                connection.query("delete from label where id =?",id,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                });
            })
        })
    },
    
    //添加管理员
    addMaster:function addMaster(name,pwd){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                connection.query('alter table admin drop id');
                connection.query('alter table admin add id int not null primary key auto_increment first');
                connection.query("insert into admin(UserName,UserPass) values (?,?)",[name,pwd],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                });
            })
        })
    },

    //删除管理员
    delMaster:function delMaster(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                connection.query("delete from admin where id =?",id,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                });
            })
        })
    },

    //更改管理员信息
    updateMaster:function updateMaster(name,pwd,id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                
                connection.query("update admin set UserName=?,UserPass=? where id=?",[name,pwd,id],function(err,result){              
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

    //删除求职用户
    delUser_seeker:function delUser_seeker(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                connection.query("delete from user_seekercase where s_id =?",id,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                });
                
            })
        })
    },
    //删除招聘用户
    delUser_recruit:function delUser_recruit(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                connection.query("delete from user_recruitcase where r_id =?",id,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                });
                
            })
        })
    },




}