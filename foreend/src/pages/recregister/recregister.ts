import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

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
  mes='';
  
  reg(){
    console.log(this.username);
    this.http.get('http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userName='+this.username+'&userPwd='+this.password).subscribe(data=>{
      console.log(data);
      if(data['_body']==0){
        this.mes="";
        this.showAlert();
      }     
      if(data['_body']==1){
        this.mes="用户名已存在";
      }
      if(data['_body']=='input parameter'){
        this.mes = '请输入用户名和密码';
      }
    });
    // this.http.get('http://127.0.0.1:3000/user/admin-recruit').subscribe(data=>{
    //   console.log(data);
    // });
  }
    
}
