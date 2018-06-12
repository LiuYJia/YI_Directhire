import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChoosePage } from '../choose/choose';

/**
 * Generated class for the AnimationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animation',
  templateUrl: 'animation.html',
})
export class AnimationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimationPage');
  }

  goPage(){
    this.navCtrl.push('ChoosePage');
  }

}
