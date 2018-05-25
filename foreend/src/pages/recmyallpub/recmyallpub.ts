import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { RecmyPage } from '../recmy/recmy';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
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
}
