import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RecmypubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmypub',
  templateUrl: 'recmypub.html',
})
export class RecmypubPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl:AlertController) {
  }
  job;sort;name;num;money;age;school;tel;detail;
  position="publish";
  items = [];
  sch = ['不限','实习生','大专','大专及以上','本科','本科及以上','研究生','研究生及以上'];
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecmypubPage');   
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getSort').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(let i=0;i<8;i++){
        this.items[i] =message[i].name;
      }
    });
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
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  submit(){
    this.http.post('http://127.0.0.1:3000/user/updateRecruit/publish',JSON.stringify({username:localStorage.getItem("login"),name:this.name,sort:this.sort,num:this.num,job:this.job,money:this.money,school:this.school,age:this.age,detail:this.detail,tel:this.tel}),{headers:this.headers}).subscribe(data=>{
      console.log(data);
      if(data['_body']==1) this.showAlert1();
      if(data['_body']==2) this.showAlert2();
    });
  }
  
}
