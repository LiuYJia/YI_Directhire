import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmy',
  templateUrl: 'seekmy.html',
})
export class SeekmyPage {

  list=['个人简介','修改个人简历','修改个人信息','抢单成功','版本更新','帮助与反馈','关于我们'];
  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams) {
  }
  retreat(){
    this.app.getRootNavs()[0].setRoot('RecloginPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

}
