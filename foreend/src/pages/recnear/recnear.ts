import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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
  fastitem = [{img:'assets/imgs/class3.png',name:'Luna',age:"27岁",sex:"女",infor:'个人简历：123',schooling:'本科'},
  {img:'assets/imgs/class2.png',name:'Bob',age:"25岁",sex:"男",infor:'个人简历：123',schooling:'本科'},
  {img:'assets/imgs/class3.png',name:'Luna',age:"27岁",sex:"女",infor:'个人简历：123',schooling:'本科'},
  {img:'assets/imgs/class2.png',name:'Bob',age:"25岁",sex:"男",infor:'个人简历：123',schooling:'本科'}];
  highitem = [{img:'assets/imgs/class3.png',name:'Luna',age:"27岁",sex:"女",infor:'个人简历：123',schooling:'本科'},
  {img:'assets/imgs/class2.png',name:'Bob',age:"25岁",sex:"男",infor:'个人简历：123',schooling:'本科'}];

  item;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.item = navParams.data.item;

  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad RecnearPage');
  }

  near="fast";
  seeker(item){
    this.navCtrl.push('RecseekerPage',{title:item});
  }
}
