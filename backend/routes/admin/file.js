var express = require('express')
    router = express.Router(),    
    formidable = require('formidable'),
    fs = require('fs'),
    TITLE = '上传文件',
    folder = '/imgAdmin/';
var Uploadimg_admin = require('../../method/Ruser').Uploadimg_admin;

/* GET home page. */
router.get('/', function(req, res) {
  var u_no =  req.session.username;
  res.render('index', { title: TITLE,page:'file',username:u_no });
});

router.post('/', function(req, res) {    

  var form = new formidable.IncomingForm();   //创建上传表单
      form.encoding = 'utf-8';        //设置编辑
      form.uploadDir = 'public' + folder;     //设置上传目录
      form.keepExtensions = true;     //保留后缀
      form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小

  var u_no =  req.session.username;  
      

    form.parse(req, function(err, fields, files) {
        
        if (err) {
          res.locals.error = err;
          res.render('index', { title: TITLE,page:'file',username:u_no });
          return;        
        }  
        
       
        var extName = '';  //后缀名
        switch (files.fulAvatar.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;         
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;         
        }

        if(extName.length == 0){
              res.locals.error = '只支持png和jpg格式图片';
              res.render('index', { title: TITLE,page:'file',username:u_no });
              return;                   
        }

        var avatarName = Math.random() + '.' + extName;
        var newPath = form.uploadDir + avatarName;
        fs.renameSync(files.fulAvatar.path, newPath);  //重命名
        var savePath = folder + avatarName;
        // console.log(savePath);        
        // console.log(files.fulAvatar.path);
        // console.log(newPath);
        Uploadimg_admin(savePath).then(function(result){
            if(result != 0){
                console.log('上传图片成功');            
            }
        }).catch(function(err){
            console.log(err);
        });



    });
    

    res.locals.success = '上传成功';
    var u_no =  req.session.username;
    res.render('index', {  title: TITLE,page:'file',username:u_no});      
});

module.exports = router;