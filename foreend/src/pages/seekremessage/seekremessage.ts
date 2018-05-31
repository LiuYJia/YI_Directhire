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
  img;content;author;date;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('all'));
    this.name = navParams.get('all').title;
    this.img = navParams.get('all').icon;
    this.content = navParams.get('all').content;
    this.author = navParams.get('all').author;
    this.date = navParams.get('all').date;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekremessagePage');
  }

}
