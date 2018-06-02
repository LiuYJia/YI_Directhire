import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Headers } from '@angular/http';

/**
 * Generated class for the SeeknearmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seeknearmes',
  templateUrl: 'seeknearmes.html',
})
export class SeeknearmesPage {
  job;money;time;address;num;username;detail;tel;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public alertCtrl: AlertController) {
    this.job = navParams.get('mes').job;
    this.money = navParams.get('mes').money;
    this.time = navParams.get('mes').time;
    this.address = navParams.get('mes').address;
    this.num = navParams.get('mes').num;
    this.detail = navParams.get('mes').detail;
    this.tel = navParams.get('mes').tel;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeeknearmesPage');
    this.username = localStorage.getItem('login');
  }

  showAlert1() {
    let alert = this.alertCtrl.create({
      subTitle: '收藏成功！',
      buttons: ['确定']
    });
   alert.present();
  } 
  showAlert2() {
    let alert = this.alertCtrl.create({
      subTitle: '收藏失败！',
      buttons: ['确定']
    });
   alert.present();
  }
  //收藏职位
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  star(){
    this.http.post('http://127.0.0.1:3000/user/updateSeeker/Collect_seeker',JSON.stringify({
      s_username:localStorage.getItem("login"),r_username:this.username}),{headers:this.headers}).subscribe(data=>{
      console.log(data);
      if(data['_body']==1) this.showAlert1();
      if(data['_body']==2) this.showAlert2();
    })
  }
}
