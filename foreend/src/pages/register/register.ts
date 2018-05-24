import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Headers } from '@angular/http';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  back(){
    this.navCtrl.pop();
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: '注册成功！',
      buttons: ['确定']
    });
   alert.present();
  } 
  username='';
  password='';
  mes='';

  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  
  reg(){
    console.log(this.username);
  //   this.http.get('http://127.0.0.1:3000/user/admin-seeker?status=register&userName='+this.username+'&userPwd='+this.password).subscribe(data=>{
  //     console.log(data);
  //     if(data['_body']==0)this.showAlert();
  //     if(data['_body']==1)this.mes="用户名已存在";
  //   });
  // }
  this.http.post('http://127.0.0.1:3000/user/admin-seeker',JSON.stringify({status:'register',username:this.username,password:this.password}),{headers:this.headers}).subscribe(data=>{
    console.log(data);
    if(data['_body']==1){
      this.mes="";
      this.showAlert();
    }     
    if(data['_body']==2){
      this.mes="用户名已存在";
    }
  });
  }
}
