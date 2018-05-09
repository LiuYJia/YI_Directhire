import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';

/**
 * Generated class for the RecregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recregister',
  templateUrl: 'recregister.html',
})
export class RecregisterPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecregisterPage');
  }

  back(){
    this.navCtrl.pop();
  }
  username='';
  password='';
  
  reg(){
    console.log(this.username);
    this.http.get('http://127.0.0.1:3000/user/admin-recruit?userName='+this.username+'&userPwd='+this.password).subscribe(data=>{
      console.log(data);
    });
  }
    
}
