import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeekremessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekremessage',
  templateUrl: 'seekremessage.html',
})
export class SeekremessagePage {
  name;
  img;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('all').title;
    this.img = navParams.get('all').icon;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekremessagePage');
  }

}
 