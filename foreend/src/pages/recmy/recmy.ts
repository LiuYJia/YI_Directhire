import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RecloginPage } from '../reclogin/reclogin';

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

  items = ["发布职位信息","我发布的","清除缓存"];
  user = {img:"assets/imgs/class3.png",name:"Luna",num:"13145878888",password:"123456"};
  
  set(){
    this.navCtrl.push('RecsetPage',{user:this.user});
  }
  gorecmypub(){
    this.navCtrl.push('RecmypubPage');
  }
  gorecmyallpub(){
    this.navCtrl.push('RecmyallpubPage');
  }
  gorecuserque(){
    this.navCtrl.push('RecuserquePage');
  }
  leave(){
    this.app.getRootNavs()[0].setRoot(RecloginPage);
  }
}
