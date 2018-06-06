///<reference path="../../services/jquery.d.ts"/> 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Http } from '@angular/http';

/**
 * Generated class for the SeekchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekchat',
  templateUrl: 'seekchat.html',
})
export class SeekchatPage { 
  username;name;img;mes;
  //发送者头像
  sendImg;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private keyboard: Keyboard,
    public http:Http) {
    this.name = navParams.get('all').name;
    this.sendImg = navParams.get('all').img;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekchatPage');
    //获取本用户信息
    this.username = localStorage.getItem("login");
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/ResumeMsg?username='+localStorage.getItem('login')).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      this.img = 'http://127.0.0.1:3000'+message[0].img;
      console.log(this.img);
    })
  }
  
  //发送消息
  send(){
    this.keyboard.show();
    $('#mesList').html($('#mesList').html()+'<li>'
    +'<div class="rightd">'
        +'<span ng-class="rightd_h">'
            +'<img src='+this.img+' style="width:39.6px;height:39.6px;float:right;"/>'
        +'</span>'
        +'<div class="speech right" ng-class="speech left">'+this.mes+'</div>'
    +'</div>'
    +'</li>');
    // $('#mesList').html($('#mesList').html()+'<li>'
    // +'<div class="leftd">'
    //     +'<span ng-class="leftd_h">'
    //         +'<img src='+this.sendImg+' style="width:39.6px;height:39.6px;float:left;"/>'
    //     +'</span>'
    //     +'<div class="speech left" ng-class="speech left">'+this.mes+'</div>'
    // +'</div>'
    // +'</li>');
  }

//this.keyboard.show();

// this.keyboard.close();
}
