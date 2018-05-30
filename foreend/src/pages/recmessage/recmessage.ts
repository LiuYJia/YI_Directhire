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
  info=[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecmessagePage');
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getarticle').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(var i=0;i<message.length;i++){
        this.info[i] = message[i];
      }
    });
  }
  items=[{img:"assets/imgs/class1.png",name:"seeker01",last:"last message!",time:'5:00'},
  {img:"assets/imgs/class2.png",name:"seeker02",last:"last message!",time:'4:00'},
  {img:"assets/imgs/class3.png",name:"seeker03",last:"last message!",time:'3:00'},
  {img:"assets/imgs/class4.png",name:"seeker04",last:"last message!",time:'2:00'}];
  gorecchat(item){
    this.navCtrl.push('RecchatPage',{all:item});
  }
//进入相应文章页
  goto(item){
    this.navCtrl.push('SeekremessagePage',{all:item});
  }
}
