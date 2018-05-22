import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Headers } from '@angular/http';

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
    public http: Http,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecregisterPage');
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
  secondpw='';
  mes1='';
  mes2='';
  mes3='';

  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  
  reg(){
    if(this.password.length>=6){
      if(this.password==this.secondpw){
        this.http.post('http://127.0.0.1:3000/user/admin-recruit',JSON.stringify({status:'register',username:this.username,password:this.password}),{headers:this.headers}).subscribe(data=>{
          console.log(data);
          if(data['_body']==1){
            this.mes1="";
            this.mes2="";
            this.mes3="";
            this.showAlert();
          }     
          if(data['_body']==2){
            this.mes2="";
            this.mes3="";
            this.mes1="用户名已存在";
          }
        });
      }else{
          this.mes1="";
          this.mes3="";
          this.mes2 = "两次输入的密码不一致";
      }
    }else{
        this.mes1='';
        this.mes2='';
        this.mes3='密码不可少于6位';
    }
   
    
  }
    
}
