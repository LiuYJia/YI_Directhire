import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RechomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rechome',
  templateUrl: 'rechome.html',
})
export class RechomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  row1="class1";
  class = [{img:"assets/imgs/class1.png",name:"",val:"class1"},
  {img:"assets/imgs/class2.png",name:"",val:"class2"},
  {img:"assets/imgs/class3.png",name:"",val:"class3"},
  {img:"assets/imgs/class4.png",name:"",val:"class4"},];
  class0 = [{img:"assets/imgs/class5.png",name:"",val:"class5"},
  {img:"assets/imgs/class6.png",name:"",val:"class6"},
  {img:"assets/imgs/class7.png",name:"",val:"class7"},
  {img:"assets/imgs/class8.png",name:"计算机",val:"class8"}];
  items = [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad RechomePage');
    this.http.get('http://127.0.0.1:3000/user/getSort_recruit').subscribe(data=>{
      console.log(data['_body']);
      var message = JSON.parse(data['_body']);
      for(let i=0;i<4;i++){
        this.class[i].name = message[i].name;
        this.items[i] = message[i].name;
        this.items[i+4] = message[i+4].name;
      }
      for(let i=0;i<4;i++){
        this.class0[i].name =message[i+4].name;
      }
    })
  }
  get(){

  }
  seeker(item){
    this.navCtrl.push('RecseekerPage',{title:item});
  }
  class1=[{img:"assets/imgs/class1.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class1.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class1.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class1.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."}];
  class2=[{img:"assets/imgs/class2.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class2.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class2.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class2.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."}];
  class3=[{img:"assets/imgs/class3.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class3.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class3.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class3.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."}];
  class4=[{img:"assets/imgs/class4.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class4.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class4.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class4.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."}];
  class5=[{img:"assets/imgs/class5.png",name:"姓名",schooling:"本科",sex:"女",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class5.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class5.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class5.png",name:"姓名",schooling:"本科",age:"25 岁",sex:"女",mes:"Listen, I've had a pretty messed up day..."}];
//加载
  doInfinite(infiniteScoll){
    setTimeout(()=>{
      infiniteScoll.complete();
      if(this.class1.length>50){
        infiniteScoll.enable(false);
      }
    },500);
  }
}
