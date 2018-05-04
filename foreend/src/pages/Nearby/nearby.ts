import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage {
info=[{job:'服务员',price:'￥80/小时',time:'2017/12/27',location:'空中花园'},
{job:'服务员',price:'￥80/小时',time:'2017/12/27',location:'空中花园'},
{job:'服务员',price:'￥80/小时',time:'2017/12/27',location:'空中花园'},{job:'服务员',price:'￥80/小时',time:'2017/12/27',location:'空中花园'}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearbyPage');
  }

}
