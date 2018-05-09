import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { PwbackPage } from '../pwback/pwback';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  back(){
    this.navCtrl.pop();
  }
  sub(){
    this.navCtrl.setRoot(TabsPage);
  }
  pwback(){
    this.navCtrl.push(PwbackPage);
  }
  reg(){
    this.navCtrl.push(RegisterPage);
  }
}
