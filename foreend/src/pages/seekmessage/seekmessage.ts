import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{SeekremessagePage} from '../seekremessage/seekremessage';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
/**
 * Generated class for the SeekmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmessage',
  templateUrl: 'seekmessage.html',
})
export class SeekmessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  info=[];rec;img;name;arr=[];chatrec;
  ionViewDidEnter() {
    console.log('ionViewDidLoad SeekmessagePage');
    // this.rec = JSON.stringify(localStorage);
    // var job=JSON.parse(this.rec);
    // for(var key in job){
    //   this.arr.push(key);
    // }
    // for(var i=0;i<this.arr.length-1;i++){
    //   var arr=this.arr;
    //   var img =this.img;
    //   var list = this.list;
    //   var server = this.http;
    //   !function(i){
    //     console.log(arr[i]);
    //     // for(var i=0;i<list.length;i++){

    //     // }
    //     // if(arr[i]!=list[i])
    //     server.get('http://127.0.0.1:3000/user/getMessage_recruit/detailR?username='+arr[i]).subscribe(data=>{
    //       var message = JSON.parse(data["_body"]);
    //       console.log(message);
    //       img = 'http://127.0.0.1:3000'+message[0].img;
    //       list.unshift({img:"",name:"",ig:"last message!",time:'5:00'});
    //       list[0].name = arr[i];
    //       list[0].img = img;
    //     });
    //   }(i);    
    // }
    this.chatrec = localStorage.getItem('chatrec');
    console.log(this.chatrec);
    // for(var i=0;i<this.list.length;i++){
    //   console.log(this.chatrec!=this.list[i].name)
    // }
    if(this.chatrec==null){
      return;
    }else{
      this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/detailR?username='+this.chatrec).subscribe(data=>{
      var message = JSON.parse(data["_body"]);
      console.log(message);
      this.img = 'http://127.0.0.1:3000'+message[0].img;
      this.list.unshift({img:"",name:"",ig:"last message!",time:'5:00'});
      this.list[0].name = this.chatrec;
      this.list[0].img = this.img;
      localStorage.removeItem('chatrec');
    });
    }
    
    
    //获取文章列表
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getarticle').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(var i=0;i<message.length;i++){
        this.info[i] = message[i];
      }
    });
    
  }
  list = [];
  //list=[{name:'马云',img:'assets/imgs/18.jpg',ig:'五星级酒店不能去抢麻辣烫的生意，要有自己的定位。',time:'10:11'}];
  //进入聊天页面
  goseekchat(item){
    this.navCtrl.push('SeekchatPage',{all:item});
  }
  //进入文章详情页
  goto(item){
    this.navCtrl.push('SeekremessagePage',{all:item});
  }
  //删除消息列表项
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  del(item){
    var list = this.list;
    for(var i = 0;i < list.length; i++) { 
      !function(i){
          if(list[i] == item){  
            list.splice(i,1);         
          } 
        }(i);
    }
  }
}
