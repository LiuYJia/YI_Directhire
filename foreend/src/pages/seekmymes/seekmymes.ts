import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeekmymesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmymes',
  templateUrl: 'seekmymes.html',
})
export class SeekmymesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekmymesPage');
  }
  goseekmesinfo1(){
    this.navCtrl.push('Seekmesinfo1Page');
  }

}
