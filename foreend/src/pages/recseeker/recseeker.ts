import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecseekerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recseeker',
  templateUrl: 'recseeker.html',
})
export class RecseekerPage {
  img;
  name;
  sex;
  age;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img = navParams.get('title').img;
    this.name = navParams.get('title').name;
    this.sex = navParams.get('title').sex;
    this.age = navParams.get('title').age;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecseekerPage');
  }

}
