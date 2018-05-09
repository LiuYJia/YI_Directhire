import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RecmyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmy',
  templateUrl: 'recmy.html',
})
export class RecmyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecmyPage');
  }

  items = ["发布职位信息","清除缓存"];
  user = {img:"assets/imgs/class3.png",name:"Luna",num:"13145878888",password:"123456"};
  leave(){
    this.app.getRootNavs()[0].setRoot('RecloginPage');
  }
  set(){
    this.navCtrl.push('RecsetPage',{user:this.user});
  }
  
}
