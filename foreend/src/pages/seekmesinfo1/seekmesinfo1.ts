import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Headers } from '@angular/http';

/**
 * Generated class for the Seekmesinfo1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmesinfo1',
  templateUrl: 'seekmesinfo1.html',
})
export class Seekmesinfo1Page {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public alertCtrl: AlertController) {
  }
  name;sex;age;tel;school;job;money;info1;username;sort;items = [];//类别
  ionViewDidLoad() {
    console.log('ionViewDidLoad Seekmesinfo1Page');
    //获取职位类别
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getSort').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(let i=0;i<8;i++){
        this.items[i] =message[i].name;
      }
    });
    //获取简历信息
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/ResumeMsg?username='+localStorage.getItem('login')).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message[0]);
      this.name = message[0].name;
      this.sex = message[0].sex;
      this.age = message[0].age;
      this.tel = message[0].tel;
      this.school = message[0].school;
      this.job = message[0].job;
      this.money = message[0].money;
      this.info1 = message[0].detail;
      this.username = message[0].username;
      this.sort = message[0].sort;
    })
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
//提交修改信息
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  submit(){
    this.http.post('http://127.0.0.1:3000/user/updateSeeker/UpdateResume',JSON.stringify({username:localStorage.getItem("login"),
    name:this.name,sex:this.sex,age:this.age,tel:this.tel,school:this.school,job:this.job,money:this.money,detail:this.info1,sort:this.sort}),{headers:this.headers}).subscribe(data=>{
      console.log(data);
      if(data['_body']==1) this.showAlert1();
      if(data['_body']==2) this.showAlert2();
    });
   }

}
