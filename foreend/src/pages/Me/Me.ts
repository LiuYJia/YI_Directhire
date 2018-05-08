import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  list=['个人简介','修改个人简历','修改个人信息','抢单成功','版本更新','帮助与反馈','关于我们'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

}
