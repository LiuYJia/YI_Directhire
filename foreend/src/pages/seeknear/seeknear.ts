import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from "@angular/http"; 
import { AlertController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the SeeknearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seeknear',
  templateUrl: 'seeknear.html',
})
export class SeeknearPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private geolocation: Geolocation,
    public http:Http,
    public jsonp:Jsonp,
    public alertCtrl:AlertController) {}

  job;tel;num;address;longitude;latitude;time;money;
  info=[];
  ionViewDidEnter() {
    console.log('SeeknearPage');
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   this.jsonp.get('http://v.juhe.cn/offset/index?key=c1d497ad101410ff5c7113c37baef2da&lat='+resp.coords.latitude+'&lng='+resp.coords.longitude+'&type=1&callback=JSONP_CALLBACK').subscribe(data=>{
    //     console.log(data['_body'].result.off_lng,data['_body'].result.off_lat);
    //     this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/Getnear?&longitude='+data['_body'].result.off_lng+'&latitude='+data['_body'].result.off_lat).subscribe(data=>{
    //       var message = JSON.parse(data['_body']);
    //       console.log(message);
    //       for(var i=0;i<message.length;i++){
    //         this.info[i] = message[i];
    //       }
    //     })
    //   })           
    // }).catch((error) => {
    //   alert(error);
    // });
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/Getnear?&longitude=114.529357&latitude=38.003581').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(var i=0;i<message.length;i++){
        this.info[i] = message[i];
      }
    })
    
  }
  //进入可抢职位详情页
  goseeknearmes(item){
    this.navCtrl.push('SeeknearmesPage',{mes:item});
  }
  //抢单
  // grab(){
  //   console.log('grab');
  // }
  
}
