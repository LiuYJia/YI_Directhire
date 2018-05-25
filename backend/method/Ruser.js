var mysql = require('mysql');
var database = require('../models/database');
var pool = mysql.createPool(database.pool);

module.exports = {
    
    //发布信息招聘
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

    //获取我发布地列表
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

    //发送反馈
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

    //反馈
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

    //获取求职者详细信息
    GetMsg:function GetMsg(username){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var GetMsg_sql = 'select * from msg_seeker where username = ?';
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
    },

    //获取我发布地信息
    Msg_Publishme:function Msg_Publishme(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var Msg_Publishme_sql = 'select * from msg_recruit where id = ?';
                connection.query(Msg_Publishme_sql,id,function(err,data){
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

    //修改发布信息
    Updatepubme:function Updatepubme(data){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var Updatepubme_sql = 'update msg_recruit set job =?,sort =?,name=?,num=?,money=?,age=?,school=?,tel=?,detail=? where id=?';
                connection.query(Updatepubme_sql,[data.job,data.sort,data.name,data.num,data.money,data.age,data.school,data.tel,data.detail,data.id],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                        console.log(result);
                    }
                    connection.release();
                })
            })
        })
    },

    //上传图片
    Uploadimg_admin:function Uploadimg_admin(data){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var Uploadimg_admin_sql = 'insert into img_admin(img) values (?)';
                connection.query(Uploadimg_admin_sql,data,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result.affectedRows);
                        // console.log(result.affectedRows);
                    }
                    connection.release();
                })
            })
        })
    },

    //获取轮播图
    getImg_recruit:function getImg_recruit(){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var getImg_recruit_sql = 'select * from img_admin';
                connection.query(getImg_recruit_sql,function(err,result){
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                        // console.log();
                    }
                })
            })
        })
    },

    //删除已发布信息
    Delmsg:function Delmsg(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var Delmsg_sql = 'delete from msg_recruit where id=?';
                connection.query(Delmsg_sql,id,function(err,result){
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                })
            })
        })
    },

    //头像存储
    imgSave:function imgSave(username,savepath){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var imgSave_sql = 'update msg_recruit set img =? where username = ?';
                connection.query(imgSave_sql,[savepath,username],function(err,result){
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                        console.log(result.affectedRows);
                    }
                })
            })
        })
    }

}