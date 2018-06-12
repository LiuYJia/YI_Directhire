import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the SeekmymesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmymes',
  templateUrl: 'seekmymes.html',
})
export class SeekmymesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  name;sex;age;tel;school;job;money;detail;img;
  ionViewDidEnter() {
    console.log('ionViewDidLoad SeekmymesPage');
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/ResumeMsg?username='+localStorage.getItem('login')).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message[0]);
      this.name = message[0].name;
      this.sex = message[0].sex;
      this.age = message[0].age;
      this.tel = message[0].tel;
      this.school = message[0].school;
      this.job = message[0].job;
      this.money = message[0].money;
      this.detail = message[0].detail;
      this.img = 'http://127.0.0.1:3000'+message[0].img;
    })
  }
  goseekmesinfo1(){
    this.navCtrl.push('Seekmesinfo1Page');
  }

}
