import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeekmygrabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmygrab',
  templateUrl: 'seekmygrab.html',
})
export class SeekmygrabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekmygrabPage');
  }
  info=[{job:'服务员',price:'￥80/天',time:'2017/12/27',location:'空中花园',num:'5人'},
        {job:'宣传人员',price:'￥80/天',time:'2017/12/27',location:'空中花园',num:'3人'},
        {job:'话务员',price:'￥80/天',time:'2017/12/27',location:'空中花园',num:'2人'},
        {job:'销售员',price:'￥80/小时',time:'2017/12/27',location:'空中花园',num:'2人'}];

}
