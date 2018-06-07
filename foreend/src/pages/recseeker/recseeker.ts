import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RecseekerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recseeker',
  templateUrl: 'recseeker.html',
})
export class RecseekerPage {
  img;name;sex;age;email;tel;school;job;money;detail;id;mes;username;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,
    public alertCtrl: AlertController) {
    this.img = navParams.get('title').img;
    this.name = navParams.get('title').name;
    this.sex = navParams.get('title').sex;
    this.age = navParams.get('title').age;
    this.id = navParams.get('title').id;
    this.mes=navParams.get('title');
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getmsg?username='+navParams.get('title').username).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message[0]);
      this.name = message[0].name;
      this.sex = message[0].sex;
      this.age = message[0].age;
      this.tel = message[0].tel;
      this.school = message[0].school;
      this.job = message[0].job;
      this.money = message[0].money;
      this.detail = message[0].detail;
      this.username = message[0].username;
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad RecseekerPage');
  }
   //收藏求职者
   showAlert3() {
    let alert = this.alertCtrl.create({
      subTitle: '收藏成功！',
      buttons: ['确定']
    });
   alert.present();
  } 
  showAlert4() {
    let alert = this.alertCtrl.create({
      subTitle: '收藏失败！',
      buttons: ['确定']
    });
   alert.present();
  }
   headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
   f=false;
   star(){
     console.log(this.id);
     this.f = true;
     this.http.post('http://127.0.0.1:3000/user/updateRecruit/Collect_recruit',JSON.stringify({
       r_username:localStorage.getItem("login"),s_id:this.id}),{headers:this.headers}).subscribe(data=>{
       console.log(data);
       if(data['_body']==1) this.showAlert3();
       if(data['_body']==2) this.showAlert4();
     })
   }
   //发起聊天
   sub(){
    this.navCtrl.push('RecchatPage',{all:this.mes});
    localStorage.setItem("chatseek",this.username);
   }

}
