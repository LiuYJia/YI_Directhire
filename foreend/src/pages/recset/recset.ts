import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, ToastController } from 'ionic-angular';


/**
 * Generated class for the RecsetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recset',
  templateUrl: 'recset.html',
})
export class RecsetPage {
  name;img;num;password;

  constructor(public platform: Platform,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.name = navParams.get('user').name;
      this.img = navParams.get('user').img;
      this.num = navParams.get('user').num;
      this.password = navParams.get('user').password;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecsetPage');
  }
  back(){
    this.navCtrl.pop();
    console.log("back");
  }
  cgpwd(){
    this.navCtrl.push('ReccgpwdPage');
  }

}
