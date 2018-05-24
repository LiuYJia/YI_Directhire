
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

    //删除求职注册用户
    delUser_seeker:function delUser_seeker(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                connection.query("delete from user_seeker where s_id =?",id,function(err,result){
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
    //删除招聘注册用户
    delUser_recruit:function delUser_recruit(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                connection.query("delete from user_recruit where r_id =?",id,function(err,result){
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

    //删除反馈信息
    delFeedback:function delFeedback(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var delFeedback_sql = 'delete from feedback where id =?';
                connection.query(delFeedback_sql,id,function(err,result){
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

    //招聘者详情

    detail_R:function detail_R(){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var detail_R_sql = 'select * from msg_recruit';
                connection.query(detail_R_sql,function(err,result){
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

    //求职者详情
    detail_S:function detail_S(){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var detail_S_sql = 'select * from msg_seeker';
                connection.query(detail_S_sql,function(err,result){
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

    //删除求职详情
    delMsg_seeker:function delMsg_seeker(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var delMsg_seeker_sql = 'delete from msg_seeker where id = ?'
                connection.query(delMsg_seeker_sql,id,function(err,result){
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

    //删除招聘详情
    delMsg_recruit:function delMsg_recruit(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var delMsg_recruit_sql = 'delete from msg_recruit where id = ?'
                connection.query(delMsg_recruit_sql,id,function(err,result){
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

    //查询反馈信息总数
    num_Feedback:function num_Feedback(){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var num_Feedback_sql = 'select count(*) as num from feedback';
                connection.query(num_Feedback_sql,function(err,result){
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

    //文章列表
    getArticle:function getArticle(){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var getArticle_sql = 'select * from article';
                connection.query(getArticle_sql,function(err,result){
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
    //增加文章
    addArticle:function addArticle(data){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var addArticle_sql = 'insert into article(sort,title,content) values(?,?,?)';
                connection.query('alter table article drop id');
                connection.query('alter table article add id int not null primary key auto_increment first');
                connection.query(addArticle_sql,[data.sort,data.title,data.content],function(err,result){
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
    //删除文章
    delArticle:function delArticle(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var delArticle_sql = 'delete from article where id =?';
                connection.query(delArticle_sql,id,function(err,result){
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
    //文章详情
    msgArticle:function msgArticle(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var msgArticle_sql = 'select * from article where id =?';
                connection.query(msgArticle_sql,id,function(err,result){
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
    //更改文章
    updateArticle:function updateArticle(data){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var updateArticle_sql = 'update article set sort=?,title=?,content=? where id=?';
                connection.query(updateArticle_sql,[data.sort,data.title,data.content,data.id],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        console.log(result);
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },




}