var mysql = require('mysql');
var database = require('../models/database');
var pool = mysql.createPool(database.pool);

module.exports = {
    //获取分类
    getSort:function getSort(){     
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var getSort_sql = 'select * from label';
                connection.query(getSort_sql,function(err,result){
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
    //获取相关商家
    getRecruit:function getRecruit(sort){     
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var getRecruit_sql = 'select * from msg_recruit where sort =?';
                connection.query(getRecruit_sql,[sort],function(err,result){
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
    //获取商家详情
    detail_Recruit:function detail_Recruit(id){     
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var detail_Recruit_sql = 'select * from msg_recruit where id = ?';
                connection.query(detail_Recruit_sql,[id],function(err,result){
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
    //注册信息获取
    set_Recruit:function set_Recruit(username){     
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var set_Recruit_sql = 'select * from user_seeker where username = ?';
                connection.query(set_Recruit_sql,[username],function(err,result){
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
    //注册信息修改
    UpdateSet:function UpdateSet(data,username){     
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var UpdateSet_sql = 'update user_seeker set password =?,phone=?,email=? where username=?';
                connection.query(UpdateSet_sql,[data.password,data.phone,data.email,username],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result.affectedRows);
                    }
                    connection.release();
                })
            })
        })
    },
    //个人简历获取
    ResumeMsg:function ResumeMsg(username){     
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var ResumeMsg_sql = 'select * from msg_seeker where username = ?';
                connection.query(ResumeMsg_sql,[username],function(err,result){
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
    //个人简历修改
    UpdateResume:function UpdateResume(data,username){     
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var UpdateResume_sql = 'update msg_seeker set sex =?,sort=?,job=?,money=?,school=?,tel=?,age=?,detail=?,name=? where username =?';
                connection.query(UpdateResume_sql,[data.sex,data.sort,data.job,data.money,data.school,data.tel.data.age,data.detail,data.name,username],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result.affectedRows);
                        console.log(result.affectedRows);
                    }
                    connection.release();
                })
            })
        })
    },
    //上传头像
    UpdateImg:function UpdateImg(username,savepath){     
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var UpdateImg_sql = 'update msg_seeker set img=? where username=?';
                connection.query(UpdateImg_sql,[savepath,username],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result.affectedRows);
                    }
                    connection.release();
                })
            })
        })
    },
    //获取轮播图
    getImg_seeker:function getImg_seeker(){     
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var getImg_seeker_sql = 'select * from img_admin';
                connection.query(getImg_seeker_sql,function(err,result){
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
    //投递简历
    SendResume:function SendResume(r_username,s_username){     
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var SendResume_sql = 'insert into resume(r_username,s_username) values(?,?)';
                connection.query(SendResume_sql,[r_username,s_username],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result.affectedRows);
                    }
                    connection.release();
                })
            })
        })
    },
}