import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeekjobmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekjobmes',
  templateUrl: 'seekjobmes.html',
})
export class SeekjobmesPage {

  job = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.job = navParams.get("item");
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekjobmesPage');
    console.log(this.job);
  }

}
