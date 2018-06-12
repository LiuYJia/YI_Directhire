import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from "@angular/http"; 
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the NearpubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearpub',
  templateUrl: 'nearpub.html',
})
export class NearpubPage {

  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private geolocation: Geolocation,
    public http:Http,
    public jsonp:Jsonp,
    public alertCtrl:AlertController) {}
  //可抢职位绑定数据
  job;tel;num;address;longitude=114.529354;latitude=38.003585;time;money;detail;err;
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  ionViewDidEnter() {
    console.log('NearpubPage');
    // this.geolocation.getCurrentPosition().then((resp) => {

    //   this.jsonp.get('http://v.juhe.cn/offset/index?key=c1d497ad101410ff5c7113c37baef2da&lat='+resp.coords.latitude+'&lng='+resp.coords.longitude+'&type=1&callback=JSONP_CALLBACK').subscribe(data=>{
    //     console.log(data['_body'].result.off_lng,data['_body'].result.off_lat);
    //   })     
      
    // }).catch((error) => {
    //   alert(error);
    // });
    
  }
  showAlert1() {
    let alert = this.alertCtrl.create({
      subTitle: '提交成功！',
      buttons: ['确定']
    });
   alert.present();
  } 
  showAlert2() {
    let alert = this.alertCtrl.create({
      subTitle: '提交失败！',
      buttons: ['确定']
    });
   alert.present();
  }
  //提交
  submit(){
    if(this.job==null||this.tel==null||this.num==null||this.address==null||this.time==null||this.money==null||this.detail==null){
      this.err='除商家介绍外全部不可为空';
    }else{
      
      this.err='';
      this.http.post('http://127.0.0.1:3000/user/updateRecruit/Nearpub',JSON.stringify({username:localStorage.getItem('login'),job:this.job,tel:this.job,num:this.num,address:this.address,longitude:this.longitude,latitude:this.latitude,time:this.time,money:this.money,detail:this.detail}),{headers:this.headers}).subscribe(data=>{
      console.log(data);
        if(data['_body']==1) this.showAlert1();
        if(data['_body']==2) this.showAlert2();
      });
    }   
   }

}
