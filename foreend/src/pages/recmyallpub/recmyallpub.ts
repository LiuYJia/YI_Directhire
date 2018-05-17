import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecmyallpubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmyallpub',
  templateUrl: 'recmyallpub.html',
})
export class RecmyallpubPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecmyallpubPage');
  }
  position="all";

  all = [{img:"assets/imgs/logo.png",pos:"前端开发工程师",money:"4k-8k",address:"北京",experience:"一年",edu:"本科及以上",name:"暴风云",time:"2018.5.15"}];

}
