import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the NearmsgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearmsg',
  templateUrl: 'nearmsg.html',
})
export class NearmsgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl:AlertController) {
    this.job = navParams.get('mes').job;
    this.tel = navParams.get('mes').tel;
    this.num = navParams.get('mes').num;
    this.address = navParams.get('mes').address;
    this.time = navParams.get('mes').time;
    this.money = navParams.get('mes').money;
    this.detail = navParams.get('mes').detail;
    this.id = navParams.get('mes').id;
  }
  job;tel;num;address;longitude;latitude;time;money;detail;err;id;
  ionViewDidLoad() {
    console.log('ionViewDidLoad NearmsgPage');
  }

  //修改提交
  showAlert1() {
    let alert = this.alertCtrl.create({
      subTitle: '修改成功！',
      buttons: ['确定']
    });
   alert.present();
  } 
  showAlert2() {
    let alert = this.alertCtrl.create({
      subTitle: '修改失败！',
      buttons: ['确定']
    });
   alert.present();
  }
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  submit(){
    console.log(this.id);
    if(this.job==null||this.tel==null||this.num==null||this.address==null||this.time==null||this.money==null||this.detail==null){
      this.err='除商家介绍外全部不可为空';
    }else{
      this.err='';
      this.http.post('http://127.0.0.1:3000/user/updateRecruit/Updatenear',JSON.stringify({id:this.id,
      job:this.job,tel:this.tel,num:this.num,address:this.address,longitude:this.longitude,latitude:this.latitude,
      time:this.time,money:this.money,detail:this.detail}),{headers:this.headers}).subscribe(data=>{
        console.log(data);
        if(data['_body']==1) this.showAlert1();
        if(data['_body']==2) this.showAlert2();
      });
    }   
   }
}
