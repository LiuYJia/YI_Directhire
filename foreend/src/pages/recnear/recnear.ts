import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecnearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recnear',
  templateUrl: 'recnear.html',
})
export class RecnearPage {
  fastitem=[{img:'assets/imgs/class3.png',name:'Luna',age:"27岁",sex:"女",infor:'个人简历：abc'},
  {img:'assets/imgs/class2.png',name:'Bob',age:"25岁",sex:"男",infor:'个人简历：123'}];
  highitem;

  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecnearPage');
  }

  near="fast";
  seeker(item){
    this.navCtrl.push('RecseekerPage',{title:item});
  }
}