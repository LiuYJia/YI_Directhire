import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RechomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rechome',
  templateUrl: 'rechome.html',
})
export class RechomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RechomePage');
  }

  class1=[{img:"assets/imgs/class1.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class1.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."}];
  class2=[{img:"assets/imgs/class2.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class2.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."}];
}
