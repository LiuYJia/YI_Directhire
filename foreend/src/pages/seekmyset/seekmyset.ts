import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Headers } from '@angular/http';
/**
 * Generated class for the SeekmysetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmyset',
  templateUrl: 'seekmyset.html',
})
export class SeekmysetPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public alertCtrl: AlertController) {
  }
  username;phone;email;password;imgupload;
  ionViewDidEnter() {
    console.log('ionViewDidLoad SeekmysetPage');
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/set_Recruit?username='+localStorage.getItem("login")).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message[0]);
      this.username = message[0].username;
      this.phone = message[0].phone;
      this.email = message[0].email;
      this.password = message[0].password;
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
//提交全部
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  submit(){
    this.http.post('http://127.0.0.1:3000/user/updateSeeker/UpdateSet',JSON.stringify({username:localStorage.getItem("login"),password:this.password,phone:this.phone,email:this.email}),{headers:this.headers}).subscribe(data=>{
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
          url:"http://127.0.0.1:3000/user/updateSeeker/UpdateImg",
          timeout:3000,
          success:function(data){console.log(data)
            if(data==1)change1();
            if(data==0)showAlert4();
            if(data==2)change2();},
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
