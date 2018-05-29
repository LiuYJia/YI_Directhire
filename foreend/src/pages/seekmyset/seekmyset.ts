import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the SeekmysetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmyset',
  templateUrl: 'seekmyset.html',
})
export class SeekmysetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekmysetPage');
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/set_Recruit?username='+localStorage.getItem("login")).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
    });
  }

}
