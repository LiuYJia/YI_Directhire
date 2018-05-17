import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RecmypubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmypub',
  templateUrl: 'recmypub.html',
})
export class RecmypubPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  position="publish";
  items = [];
  sch = ['不限','大专','大专及以上','本科','本科及以上','研究生'];
  name;sort;
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecmypubPage');   
    this.http.get('http://127.0.0.1:3000/user/getSort_recruit').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      this.items[0] = message[0].name;
      this.items[1] = message[1].name;
      this.items[2] = message[2].name;
      this.items[3] = message[3].name;
      this.items[4] = message[4].name;
      this.items[5] = message[5].name;
      this.items[6] = message[6].name;
    });
  }
  submit(){
    console.log(this.sort);
  }
  
}
