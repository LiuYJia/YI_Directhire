///<reference path="../../services/jquery.d.ts"/>  
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Headers } from '@angular/http';

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
  username='';name;imgupload;phone;job;age;email;password;

  constructor(public platform: Platform,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController) {
      //this.username = navParams.get('user').username;
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad RecsetPage');
    console.log(localStorage.getItem('login'));
    this.username = localStorage.getItem('login');
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit?userName='+localStorage.getItem("login")).subscribe(data=>{
      var message = JSON.parse(data['_body'])[0];
      console.log(message);
      this.phone = message.phone;
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
//修改密码
  cgpwd(){
    this.navCtrl.push('ReccgpwdPage');
  }
//提交全部
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  submit(){
    this.http.post('http://127.0.0.1:3000/user/updateRecruit',JSON.stringify({username:localStorage.getItem("login"),password:this.password,phone:this.phone,email:this.email}),{headers:this.headers}).subscribe(data=>{
      console.log(data);
      if(data['_body']==1) this.showAlert1();
      if(data['_body']==2) this.showAlert2();
    });
  }
  //提交头像信息
  showAlert3() {
    let alert = this.alertCtrl.create({
      subTitle: '请上传图片！',
      buttons: ['确定']
    });
   alert.present();
  }
  showAlert4() {
    let alert = this.alertCtrl.create({
      subTitle: '请JPG或PNG格式图片！',
      buttons: ['确定']
    });
   alert.present();
  }
  showAlert5() {
    let alert = this.alertCtrl.create({
      subTitle: '服务器繁忙，请稍后操作！',
      buttons: ['确定']
    });
   alert.present();
  }
  submitImg(){
      var alert = this.alertCtrl;
      function change1() {
        let al = alert.create({subTitle: '修改成功！',buttons: ['确定']});
        al.present();
      } 
      function change2() {
        let al = alert.create({subTitle: '修改失败！',buttons: ['确定']});
        al.present();
      }
      function showAlert4() {
        let al = alert.create({
          subTitle: '请JPG或PNG格式图片！',
          buttons: ['确定']
        });
       al.present();
      }
      function showAlert5() {
        let al = alert.create({
          subTitle: '服务器繁忙，请稍后操作！',
          buttons: ['确定']
        });
       al.present();
      }
      if(this.imgupload==undefined){
        this.showAlert3();
      }else{
        var option = {
            url:"http://127.0.0.1:3000/user/updateRecruit/Upload",
            timeout:3000,
            success:function(data){
              console.log(data);
              if(data==1)change1();
              if(data==0)showAlert4();
              if(data==2)change2();
            },
            error:function(err){console.log(err)},
            complete:function(XMLHttpRequest,status){
              if(status=='timeout')showAlert5();
            },
        }
        $('#img-form').ajaxSubmit(option);
        $('#img-form').resetForm();
        return false;
      }
  }
  

}
