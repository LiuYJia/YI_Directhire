import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the RecsetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recset',
  templateUrl: 'recset.html',
})
export class RecsetPage {
  username='';name;img;phone;job;age;email;password;

  constructor(public platform: Platform,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController) {
      //this.username = navParams.get('user').username;
      // this.name = navParams.get('user').name;
      // this.img = navParams.get('user').img;
      // this.phone = navParams.get('user').num;
      // this.job = navParams.get('user').job;
      // this.age = navParams.get('user').age;
      // this.email = navParams.get('user').email;
      // this.password = navParams.get('user').password;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecsetPage');
    console.log(localStorage.getItem('login'));
    this.username = localStorage.getItem('login');
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit?userName='+localStorage.getItem("login")).subscribe(data=>{
      var message = JSON.parse(data['_body'])[0];
      console.log(message);
      this.name = message.name;
      this.phone = message.phone;
      this.job = message.job;
      this.age = message.age;
      this.email = message.email;
      this.password = message.password;
    });
  }
  showAlert1() {
    let alert = this.alertCtrl.create({
      subTitle: '修改成功！',
      buttons: ['确定']
    });
   alert.present();
  } 
  showAlert2() {
    let alert = this.alertCtrl.create({
      subTitle: '修改失败！',
      buttons: ['确定']
    });
   alert.present();
  }
  back(){
    this.navCtrl.pop();
    console.log("back");
  }
  cgpwd(){
    this.navCtrl.push('ReccgpwdPage');
  }
  submit(){
    this.http.get('http://127.0.0.1:3000/user/updateRecruit?username='+localStorage.getItem("login")+'&name='+this.name+'&job='+this.job+'&age='+this.age+'&password='+this.password+'&phone='+this.phone+'&email='+this.email).subscribe(data=>{
      console.log(data);
      if(data['_body']==1) this.showAlert1();
      if(data['_body']==2) this.showAlert2();
    });
  }
}
