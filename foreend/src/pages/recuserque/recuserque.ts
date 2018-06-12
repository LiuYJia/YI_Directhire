import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Headers } from '@angular/http';

/**
 * Generated class for the RecuserquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuserque',
  templateUrl: 'recuserque.html',
})
export class RecuserquePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuserquePage');
    
  }
  showAlert1() {
    let alert = this.alertCtrl.create({
      subTitle: '提交成功！',
      buttons: ['确定']
    });
   alert.present();
  } 
  showAlert2() {
    let alert = this.alertCtrl.create({
      subTitle: '提交失败！',
      buttons: ['确定']
    });
   alert.present();
  }
  sort;txt;tel;mes;people;
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  sub(){
    // console.log(this.people);
    if(this.txt == null){
      this.mes = "请填写问题描述或建议";
    }else{
      this.mes = '';
      this.http.post('http://127.0.0.1:3000/user/updateRecruit/feedback',JSON.stringify({username:localStorage.getItem("login"),sort:this.sort,txt:this.txt,tel:this.tel,people:this.people}),{headers:this.headers}).subscribe(data=>{
        if(data['_body']==1)this.showAlert1();
        if(data['_body']==2)this.showAlert2();
      })
    } 
  }

}
