///<reference path="../../services/jquery.d.ts"/> 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RecchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recchat',
  templateUrl: 'recchat.html',
})
export class RecchatPage {
  username=localStorage.getItem('login');name;img;mes;listname;
  //发送者头像
  sendImg;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http) {
    this.name = navParams.get('all').name;
    this.sendImg = navParams.get('all').img;
    this.listname = navParams.get('all').username;
  }
  socket = io('http://localhost:3100/');
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecchatPage');
    console.log(this.listname+this.username);
     //获取本用户信息
     this.username = localStorage.getItem("login");
     this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/detailR?username='+this.username).subscribe(data=>{
       var message = JSON.parse(data['_body']);
       this.img = 'http://127.0.0.1:3000'+message[0].img;
       console.log(this.img);
     })

     this.socket.emit('joinRoom',{"roomName":this.listname+this.username},function(data){
      console.log("加入房间："+JSON.stringify(data));
    })

    this.socket.on('receiveMsg', data=>{
      $('#mesList').html($('#mesList').html()+'<li>'
      +'<div class="leftd">'
          +'<span ng-class="leftd_h">'
              +'<img src='+this.sendImg+' style="width:39.6px;height:39.6px;float:left;"/>'
          +'</span>'
          +'<div class="speech left" ng-class="speech left">'+data.msg+'</div>'
      +'</div>'
      +'</li>');
    })
  }
  ionViewDidLeave(){
    this.socket.emit("leaveRoom",{"roomName":this.listname+this.username},function (data) {
      console.log("离开房间："+ JSON.stringify(data) );
    })
  }
  //发送消息
  send(){
    var data = {"msg":this.mes,"roomName":this.listname+this.username,"client":"recruit"};
    console.log(data);
    this.socket.emit('sendMsg',data,function(data){
      console.log('消息发送：'+JSON.stringify(data));
    });
    $('#mesList').html($('#mesList').html()+'<li>'
    +'<div class="rightd">'
        +'<span ng-class="rightd_h">'
            +'<img src='+this.img+' style="width:39.6px;height:39.6px;float:right;"/>'
        +'</span>'
        +'<div class="speech right" ng-class="speech left">'+this.mes+'</div>'
    +'</div>'
    +'</li>');
    this.mes='';
  }

}
