import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

/**
 * Generated class for the SeekmygrabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmygrab',
  templateUrl: 'seekmygrab.html',
})
export class SeekmygrabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public http:Http) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad SeekmygrabPage');
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/alreadySend?s_username='+localStorage.getItem('login')).subscribe(data=>{
      console.log(data);
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(var i=0;i<message.length;i++){
        this.info[i] = message[i];
        this.info[i].img = 'http://127.0.0.1:3000'+this.info[i].img;
      }
    })
  }
  info=[];

  gojobmes(item){
    this.navCtrl.push('SeekjobmesPage',{item:item});
  }
  // //删除弹出框
  // del1() {
  //   this.navCtrl.push('SeekmygrabPage');
  //  } 
  //  del2() {
  //    let alert = this.alertCtrl.create({
  //      subTitle: '删除失败！',
  //      buttons: ['确定']
  //    });
  //   alert.present();
  //  }
  //  showConfirm(data) {
  //    let confirm = this.alertCtrl.create({
  //      title: '确认删除本职位信息?',
  //      buttons: [{text: '取消',handler: () => {console.log('Disagree clicked');}},
  //        {text: '确认', handler: () => {if(data['_body']==1) this.del1();
  //           if(data['_body']==2) this.del2();}}]
  //    });
  //    confirm.present();
  //  }
  //  //删除
  //  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  //  del(item){
  //    this.http.post('',JSON.stringify({id:item.id}),{headers:this.headers}).subscribe(data=>{
  //      this.showConfirm(data);
  //    });   
  //  }
}
