import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeekchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekchat',
  templateUrl: 'seekchat.html',
})
export class SeekchatPage {
  name;
  img;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('all').name;
    this.img = navParams.get('all').img;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekchatPage');
  }

}
