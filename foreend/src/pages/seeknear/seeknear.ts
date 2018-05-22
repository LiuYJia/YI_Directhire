import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeeknearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seeknear',
  templateUrl: 'seeknear.html',
})
export class SeeknearPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeeknearPage');
  }
  info=[{job:'服务员',price:'￥80/天',time:'2017/12/27',location:'空中花园',name:'XXX'},
        {job:'服务员',price:'￥80/天',time:'2017/12/27',location:'空中花园',name:'XXX'},
        {job:'服务员',price:'￥80/天',time:'2017/12/27',location:'空中花园',name:'XXX'},
        {job:'服务员',price:'￥80/小时',time:'2017/12/27',location:'空中花园'}];

}
