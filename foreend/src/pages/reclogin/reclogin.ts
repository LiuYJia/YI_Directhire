import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RectabsPage } from '../rectabs/rectabs';
import { Http } from '@angular/http';
// import { RectabsPage } from '../rectabs/rectabs';
/**
 * Generated class for the RecloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reclogin',
  templateUrl: 'reclogin.html',
})
export class RecloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecloginPage');
  }
  back(){
    this.navCtrl.pop();
  }
  username='';
  password='';
  mes='';
  sub(){
    this.navCtrl.setRoot(RectabsPage);
    // this.mes='';
    // console.log(this.username);
    // this.http.get('http://127.0.0.1:3000/user/admin-recruit?status=login&userName='+this.username+'&userPwd='+this.password).subscribe(data=>{
    //   console.log(data);
    //   if(data['_body']==2)this.navCtrl.setRoot(RectabsPage);
    //   if(data['_body']==1)this.mes="用户名或密码不正确";
    // });
  }
  pwback(){
    this.navCtrl.push('RecpwbackPage');
  }

  reg(){
    this.navCtrl.push('RecregisterPage');
  }
}
