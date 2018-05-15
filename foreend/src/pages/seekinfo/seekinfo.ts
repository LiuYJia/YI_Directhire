import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeekinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekinfo',
  templateUrl: 'seekinfo.html',
})

export class SeekinfoPage {
title;
price;
msg;
locate;
icon;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('all').title;
    this.icon = navParams.get('all').icon;
    this.price = navParams.get('all').price;
    this.msg = navParams.get('all').msg;
    this.locate = navParams.get('all').locate;
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekinfoPage');
  }

}
