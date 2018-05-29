import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeeknearmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seeknearmes',
  templateUrl: 'seeknearmes.html',
})
export class SeeknearmesPage {
  job;price;time;location;num;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.job = navParams.get('mes').job;
    this.price = navParams.get('mes').price;
    this.time = navParams.get('mes').time;
    this.location = navParams.get('mes').location;
    this.num = navParams.get('mes').num;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeeknearmesPage');
  }

}
