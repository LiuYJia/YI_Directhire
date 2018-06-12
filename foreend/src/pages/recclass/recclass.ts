import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recclass',
  templateUrl: 'recclass.html',
})
export class RecclassPage {

  name;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=navParams.get('class').name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecclassPage');
  }

}
