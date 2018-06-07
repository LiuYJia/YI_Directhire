import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RecmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmessage',
  templateUrl: 'recmessage.html',
})
export class RecmessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  info=[];seeker;img;
  //items=[{img:"assets/imgs/class1.png",name:"seeker01",last:"last message!",time:'5:00'}];
  items=[];
  ionViewDidEnter() {
    console.log('ionViewDidLoad RecmessagePage');
    //获取文章列表
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getarticle').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(var i=0;i<message.length;i++){
        this.info[i] = message[i];
      }
    });
    //获取消息列表
    this.seeker = localStorage.getItem('chatseek');
    if(this.seeker==null){
      return;
    }else{
      this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/ResumeMsg?username='+this.seeker).subscribe(data=>{
        var message = JSON.parse(data['_body']);
        console.log(message);
        this.items.unshift({img:"",name:"",last:"last message!",time:'5:00'})
        this.img = 'http://127.0.0.1:3000'+message[0].img;
        this.items[0].img = this.img;
        this.items[0].name = this.seeker;
        localStorage.removeItem('chatseek');
      })
    }
  }
  gorecchat(item){
    this.navCtrl.push('RecchatPage',{all:item});
  }
//进入相应文章页
  goto(item){
    this.navCtrl.push('SeekremessagePage',{all:item});
  }
  //删除
  del(item){
    var list = this.items;
    for(var i = 0;i < list.length; i++) { 
      !function(i){
          if(list[i] == item){  
            list.splice(i,1);         
          } 
        }(i);
    }
  }
}
