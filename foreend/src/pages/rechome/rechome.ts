import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RechomePage');
  }

  row1="class1";
  class = [{img:"assets/imgs/class1.png",name:"礼仪模特",val:"class1"},
  {img:"assets/imgs/class2.png",name:"老师家教",val:"class2"},
  {img:"assets/imgs/class3.png",name:"话务客服",val:"class3"},
  {img:"assets/imgs/class4.png",name:"传单派发",val:"class4"},
  {img:"assets/imgs/class5.png",name:"审核录入",val:"class5"},
  {img:"assets/imgs/class6.png",name:"服务员",val:"class6"},
  {img:"assets/imgs/class7.png",name:"问卷调查",val:"class7"},
  {img:"assets/imgs/class8.png",name:"计算机",val:"class8"}];
  class1=[{img:"assets/imgs/class1.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class1.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class1.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class1.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."}];
  class2=[{img:"assets/imgs/class2.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class2.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class2.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class2.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."}];
  class3=[{img:"assets/imgs/class3.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class3.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class3.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class3.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."}];
  class4=[{img:"assets/imgs/class4.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class4.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class4.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class4.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."}];
  class5=[{img:"assets/imgs/class5.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class5.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class5.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."},
  {img:"assets/imgs/class5.png",name:"姓名",schooling:"本科",age:"25 岁",mes:"Listen, I've had a pretty messed up day..."}];
  more(item){
    this.navCtrl.push('RecclassPage',{class:item});
  }
  doInfinite(infiniteScoll){
    setTimeout(()=>{
      infiniteScoll.complete();
      if(this.class1.length>50){
        infiniteScoll.enable(false);
      }
    },500);
  }
}
