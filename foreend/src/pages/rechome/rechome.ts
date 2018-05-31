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
  {img:"assets/imgs/class8.png",name:"",val:"class8"}];
  items = [];class1=[];slide=[];slide1;slide2;slide3;searchInfo;
  ionViewDidEnter() {
    console.log('ionViewDidLoad RechomePage');
    //获取轮播图
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getimg_recruit').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      for(let i=0;i<message.length;i++){
        this.slide[i] = message[i].img;
      }
      this.slide1 = 'http://127.0.0.1:3000'+this.slide[1];
      this.slide2 = 'http://127.0.0.1:3000'+this.slide[2];
      this.slide3 = 'http://127.0.0.1:3000'+this.slide[3];
      console.log(this.slide1);
    })
    //获取分类
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getSort').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      for(let i=0;i<4;i++){
        this.class[i].name = message[i].name;
        this.items[i] = message[i].name;
        this.items[i+4] = message[i+4].name;
      }
      for(let i=0;i<4;i++){
        this.class0[i].name =message[i+4].name;
      }
      //获取默认分类项
      this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getpeople?&sort='+message[0].name).subscribe(data=>{
        var message = JSON.parse(data['_body']);
        console.log(message);
        for(var i=0;i<message.length;i++){
          this.class1[i] = message[i];
          this.class1[i].img = 'http://127.0.0.1:3000'+this.class1[i].img;
        }
      })
    })   
  }
   //搜索
   search(){
    console.log(this.searchInfo);
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/search?&keyword='+this.searchInfo).subscribe(data=>{
      console.log(data);
      var message = JSON.parse(data['_body']);
      this.class1 = [];
      this.items = [];
      for(var i=0;i<message.length;i++){
        this.class1[i] = message[i];
        this.class1[i].img = 'http://127.0.0.1:3000'+this.class1[i].img;
      }
    })
  }
  //获取各个分类项
  sort(item){
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getSort').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      for(let i=0;i<8;i++){
        this.items[i] = message[i].name;
      }
    }) 
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getpeople?&sort='+item.name).subscribe(data=>{
        var message = JSON.parse(data['_body']);
        console.log(message);
        this.class1 = [];
        for(var i=0;i<message.length;i++){
          this.class1[i] = message[i];
          this.class1[i].img = 'http://127.0.0.1:3000'+this.class1[i].img;
        }
    })
  }
  //求职者详情页
  seeker(item){
    this.navCtrl.push('RecseekerPage',{title:item});
  }
//延时加载
  doInfinite(infiniteScoll){
    setTimeout(()=>{
      infiniteScoll.complete();
      if(this.class1.length>50){
        infiniteScoll.enable(false);
      }
    },500);
  }
}
