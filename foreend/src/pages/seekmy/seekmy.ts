import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmy',
  templateUrl: 'seekmy.html',
})
export class SeekmyPage {

  //user = {img:"assets/imgs/class3.png",username:"a",name:"Luan",num:"13145878888",job:"人事经理",age:"25岁",email:"123@163.com",password:"123456"};
  list=['个人简介','修改个人简历','修改个人信息','抢单成功'];
  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  retreat(){
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
  username = '';img;
  ionViewDidEnter() {
    console.log('ionViewDidLoad SeekmyPage');
    this.username = localStorage.getItem("login");
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/ResumeMsg?username='+localStorage.getItem('login')).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message[0]);
      this.img = 'http://127.0.0.1:3000'+message[0].img;
      console.log(this.img);
    })
  }
  //设置
  set(){
    this.navCtrl.push('SeekmysetPage');
  }
  //个人简历
  goseekmymes(){
    this.navCtrl.push('SeekmymesPage');
  }
  //已抢职位
  goseekmygrab(){
    this.navCtrl.push('SeekmygrabPage');
  }
  //收藏职位
  goseekmystore(){
    this.navCtrl.push('SeekmystorePage');
  }
  //用户反馈
  gorecuserque(){
    this.navCtrl.push('RecuserquePage');
  }
  //退出登录
  leave(){
    this.app.getRootNavs()[0].setRoot(LoginPage);
    localStorage.removeItem('login');
  }
}
