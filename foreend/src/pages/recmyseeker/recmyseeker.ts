import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RecmyseekerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmyseeker',
  templateUrl: 'recmyseeker.html',
})
export class RecmyseekerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }
  username;sort=[];items=[];
  name;school;age;sex;money;job;
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecmyseekerPage');
    //获取分类
    // this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getSort').subscribe(data=>{
    //   var message = JSON.parse(data['_body']);
    //   for(let i=0;i<8;i++){
    //     this.sort[i] =message[i].name;
    //   }
    // });
    this.username = localStorage.getItem("login");
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getResume?r_username='+this.username).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(var i=0;i<message.length;i++){
        this.items[i] = message[i];
      }
    });
  }
  //进入求职者详情页
  goSeekmymes(item){
    this.navCtrl.push('RecmyseekermesPage',{item:item});
  }

}
