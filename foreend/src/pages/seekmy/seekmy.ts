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

  user = {img:"assets/imgs/class3.png",username:"a",name:"Luan",num:"13145878888",job:"人事经理",age:"25岁",email:"123@163.com",password:"123456"};
  list=['个人简介','修改个人简历','修改个人信息','抢单成功'];
  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  retreat(){
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }
  goseekmymes(){
    this.navCtrl.push('SeekmymesPage');
  }
  goseekmygrab(){
    this.navCtrl.push('SeekmygrabPage');
  }
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
