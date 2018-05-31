import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RecmyseekermesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmyseekermes',
  templateUrl: 'recmyseekermes.html',
})
export class RecmyseekermesPage {
  name;sex;age;tel;school;job;money;detail;img;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.name = navParams.get('item').name;
    this.sex = navParams.get('item').sex;
    this.age = navParams.get('item').age;
    this.tel = navParams.get('item').tel;
    this.school = navParams.get('item').school;
    this.job = navParams.get('item').job;
    this.money = navParams.get('item').money;
    this.detail = navParams.get('item').detail;
    console.log(navParams.get('item').img);
    this.img = navParams.get('item').img;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecmyseekermesPage');
  }

}
