import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RecseekerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recseeker',
  templateUrl: 'recseeker.html',
})
export class RecseekerPage {
  img;name;sex;age;email;school;job;money;detail;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.img = navParams.get('title').img;
    this.name = navParams.get('title').name;
    this.sex = navParams.get('title').sex;
    this.age = navParams.get('title').age;
    console.log(navParams.get('title').username);
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getmsg?username='+navParams.get('title').username).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message[0]);
      this.name = message[0].name;
      this.sex = message[0].sex;
      this.age = message[0].age;
      this.email = message[0].email;
      this.school = message[0].school;
      this.job = message[0].job;
      this.money = message[0].money;
      this.detail = message[0].detail;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecseekerPage');
  }

}
