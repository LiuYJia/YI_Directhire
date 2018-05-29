import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { RecmyPage } from '../recmy/recmy';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
//import { RecpubsetPage } from '../recpubset/recpubset';

/**
 * Generated class for the RecmyallpubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmyallpub',
  templateUrl: 'recmyallpub.html',
})
export class RecmyallpubPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl:AlertController) {
  }

  all = [];
  position="all";
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecmyallpubPage');
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/publishme?username='+localStorage.getItem("login")).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message[0]);
      for(var i=0;i<message.length;i++){
        this.all[i] = message[i];
      }
    })
  }
  //进入修改职位信息页
  gorecpub_set(item){
    this.navCtrl.push("RecpubsetPage",{title:item});
  }
  //返回
  back(){
    this.navCtrl.push(RecmyPage);
    console.log("back");
  }
  //删除弹出框
  del1() {
   this.navCtrl.push('RecmyallpubPage');
  } 
  del2() {
    let alert = this.alertCtrl.create({
      subTitle: '删除失败！',
      buttons: ['确定']
    });
   alert.present();
  }
  showConfirm(data) {
    let confirm = this.alertCtrl.create({
      title: '确认删除本职位信息?',
      buttons: [{text: '取消',handler: () => {console.log('Disagree clicked');}},
        {text: '确认', handler: () => {if(data['_body']==1) this.del1();
           if(data['_body']==2) this.del2();}}]
    });
    confirm.present();
  }
  //删除
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  del(item){
    this.http.post('http://127.0.0.1:3000/user/updateRecruit/delmsg',JSON.stringify({id:item.id}),{headers:this.headers}).subscribe(data=>{
      this.showConfirm(data);
    });   
  }
}
