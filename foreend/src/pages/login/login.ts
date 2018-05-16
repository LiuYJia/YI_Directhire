import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { PwbackPage } from '../pwback/pwback';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
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
    private formBuilder: FormBuilder,
    public http:Http,
    public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  back(){
    this.app.getRootNavs()[0].setRoot('ChoosePage');
  }
  username='';
  password='';
  mes='';
  sub(){
    console.log(this.username);
    //this.navCtrl.setRoot(TabsPage);
    this.mes='';
    console.log(this.username);
    this.http.get('http://127.0.0.1:3000/user/admin-seeker?status=login&userName='+this.username+'&userPwd='+this.password).subscribe(data=>{
      console.log(data);
      if(data['_body']==1)this.navCtrl.setRoot(TabsPage);
      if(data['_body']==2)this.mes="用户名或密码不正确";
      if(data['_body']==3)this.mes="用户名不存在";
    });
  }
  pwback(){
    this.navCtrl.push(PwbackPage);
  }
  reg(){
    this.navCtrl.push(RegisterPage);
  }
}
