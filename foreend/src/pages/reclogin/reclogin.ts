import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RectabsPage } from '../rectabs/rectabs';
// import { RectabsPage } from '../rectabs/rectabs';
/**
 * Generated class for the RecloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reclogin',
  templateUrl: 'reclogin.html',
})
export class RecloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecloginPage');
  }

  sub(){
    this.navCtrl.setRoot(RectabsPage);
  }
  pwback(){
    this.navCtrl.push('RecpwbackPage');
  }
  reg(){
    this.navCtrl.push('RecregisterPage');
  }
}
