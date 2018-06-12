import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RecloginPage } from '../reclogin/reclogin';
import { Http } from '@angular/http';

/**
 * Generated class for the RecmyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmy',
  templateUrl: 'recmy.html',
})
export class RecmyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public http:Http) {
  }

  username = '';img;
  ionViewDidEnter() {
    console.log('ionViewDidLoad RecmyPage');
    console.log(localStorage.getItem("login"));
    this.username = localStorage.getItem("login");
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/detailR?username='+localStorage.getItem("login")).subscribe(data=>{
      var message = JSON.parse(data["_body"]);
      console.log(message);
      this.img = 'http://127.0.0.1:3000'+message[0].img;
    });
  }

  items = ["发布职位信息","我发布的","清除缓存"];
  user = {img:"assets/imgs/class3.png",username:"a",name:"Luan",num:"13145878888",job:"人事经理",age:"25岁",email:"123@163.com",password:"123456"};
  //个人信息设置
  set(){
    this.navCtrl.push('RecsetPage',{user:this.user});
  }
  //收到的简历
  gorecmyseeker(){
    this.navCtrl.push('RecmyseekerPage');
  }
  //我的收藏
  gorecmystore(){
    this.navCtrl.push('RecmystorePage');
  }
  //发布职位信息
  gorecmypub(){
    this.navCtrl.push('RecmypubPage');
  }
  //我发布的
  gorecmyallpub(){
    this.navCtrl.push('RecmyallpubPage');
  }
  remove(){

  }
  //用户反馈
  gorecuserque(){
    this.navCtrl.push('RecuserquePage');
  }
  //退出登录
  leave(){
    this.app.getRootNavs()[0].setRoot(RecloginPage);
    localStorage.removeItem('login');
  }
}
