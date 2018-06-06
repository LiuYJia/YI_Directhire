import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Headers } from '@angular/http';

/**
 * Generated class for the SeekjobmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekjobmes',
  templateUrl: 'seekjobmes.html',
})
export class SeekjobmesPage {

  all = [];job;school;num;name;money;age;detail;tel;username;id;img;mes;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public alertCtrl: AlertController) {
    this.all = navParams.get("item");
    this.job = navParams.get("item").job;
    this.school = navParams.get("item").school;
    this.num = navParams.get("item").num;
    this.name = navParams.get("item").name;
    this.money = navParams.get("item").money;
    this.age = navParams.get("item").age;
    this.detail = navParams.get("item").detail;
    this.tel = navParams.get("item").tel;
    this.username = navParams.get("item").username;
    this.id = navParams.get('item').id;
    this.mes = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekjobmesPage');
  }

  showAlert1() {
    let alert = this.alertCtrl.create({
      subTitle: '投递成功！',
      buttons: ['确定']
    });
   alert.present();
  } 
  showAlert2() {
    let alert = this.alertCtrl.create({
      subTitle: '投递失败！',
      buttons: ['确定']
    });
   alert.present();
  }
//投递简历
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  sub(){
    this.http.post('http://127.0.0.1:3000/user/updateSeeker/SendResume',JSON.stringify({
      s_username:localStorage.getItem("login"),r_username:this.username}),{headers:this.headers}).subscribe(data=>{
      if(data['_body']==1) this.showAlert1();
      if(data['_body']==2) this.showAlert2();
    });
  }
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
  //收藏职位
  f=false;
  star(){
    console.log(this.id);
    this.f = true;
    this.http.post('http://127.0.0.1:3000/user/updateSeeker/Collect_seeker',JSON.stringify({
      s_username:localStorage.getItem("login"),r_id:this.id}),{headers:this.headers}).subscribe(data=>{
      console.log(data);
      if(data['_body']==1) this.showAlert3();
      if(data['_body']==2) this.showAlert4();
    })
  }
  //发起聊天
  chat(item){
    this.navCtrl.push('SeekchatPage',{all:this.mes});
  }

}
