import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AnimationPage } from '../animation/animation';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.goPage();
  }

  goPage(){
    var that = this;

    setTimeout(function(){
      console.log('20000');
      that.navCtrl.push(AnimationPage);
    },2000)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

}
