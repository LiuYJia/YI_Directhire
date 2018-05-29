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

  ionViewDidLoad() {
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
  back(){
    this.navCtrl.pop();
    console.log("back");
  }
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
  // submitImg(){
  //     if(this.imgupload==undefined){
  //       this.showAlert3();
  //     }else{
  //       var option = {
  //           url:"http://127.0.0.1:3000/user/updateRecruit/Upload",
  //           timeout:3000,
  //           success:function(data){console.log(data)},
  //           error:function(err){console.log(err)},
  //           complete:function(XMLHttpRequest,status){
  //             if(status=='timeout'){alert("服务器繁忙")}
  //           },
  //       }
  //       $('#img-form').ajaxSubmit(option);
  //       //$('#img-form').resetForm();
  //       return false;
  //     }
  // }
  upload(){
    if(this.imgupload == undefined){
      this.showAlert3();
    }else{
      var option={
        url:"http://localhost:3000/user/updateRecruit/upload",  
        timeout: 3000,   
        success:function(data){
          console.log(data);                            
        },
        error:function(err){
          console.log(err);
        },
        complete:function(XMLHttpRequest,status){ 
  　　　　if(status=='timeout'){
  　　　　　  alert("服务器繁忙");
  　　　　}
  　　  },
      }    
      $('#img-form').ajaxSubmit(option);  
      $('#img-form').resetForm();    
      return false;
    }

  }

}
