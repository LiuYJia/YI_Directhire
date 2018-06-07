var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var compression = require('compression');
var timeout = require('connect-timeout');
var router = express.Router();
var routes = require('./routes');
var app = express();

//socket.io信息收发
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on("connection", function(socket){
  console.log('user come!');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on("joinRoom",function (data,fn) {
    socket.join(data.roomName);
    console.log('joinRoom:'+data.roomName);     
    fn({"code":0,"msg":"加入房间成功","roomName":data.roomName});
  });

  socket.on("leaveRoom",function(data,fn){
    socket.leave(data.roomName);
    fn({"code":0,"msg":"已退出房间","roomName":data.roomName});
  })

  socket.on('sendMsg', function(data,fn){
    console.log('message:'+data.msg);
    socket.broadcast.to(data.roomName).emit('receiveMsg',data)
    fn({"code":0,"msg":"消息发送成功"});
  });
});
http.listen(3100);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 开启gzip
app.use(compression());
// 设置超时
app.use(timeout(5000));
//这里传入了一个密钥加session id
app.use(cookieParser('Liu'));
//使用靠就这个中间件
app.use(session({ secret: 'Liu',
                  resave: true, // 每次请求都重新设置session cookie
                  saveUninitialized: false
                }));

app.use(express.static(path.join(__dirname, 'public')));
// app.use("/scripts", express.static(__dirname + "/node_modules/"));

routes(app);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
