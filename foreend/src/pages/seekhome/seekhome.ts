///<reference path="../../services/jquery.d.ts"/> 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the SeekhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekhome',
  templateUrl: 'seekhome.html',
})
export class SeekhomePage {

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
  items = [];slide=[];slide1;slide2;slide3;searchInfo;
  class1=[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekhomePage');
    //获取轮播图
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/getImg_seeker').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      for(let i=0;i<message.length;i++){
        this.slide[i] = message[i].img;
      }
      this.slide1 = 'http://127.0.0.1:3000'+this.slide[1];
      this.slide2 = 'http://127.0.0.1:3000'+this.slide[2];
      this.slide3 = 'http://127.0.0.1:3000'+this.slide[3];
    })
    //获取分类信息
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/getsort').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      for(let i=0;i<4;i++){
        this.class[i].name = message[i].name;
        this.items[i] = message[i].name;
        this.items[i+4] = message[i+4].name;
      }
      for(let i=0;i<4;i++){
        this.class0[i].name =message[i+4].name;
      }//加载时获取第一类分类信息
      this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/getRecruit?&sort='+message[0].name).subscribe(data=>{
        var message = JSON.parse(data['_body']);
        console.log(message);
        for(var i=0;i<message.length;i++){
          this.class1[i] = message[i];
        }
      })
    })   
  }
  //搜索
  search(){
    console.log(this.searchInfo);
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/search?&keyword='+this.searchInfo).subscribe(data=>{
      console.log(data);
      var message = JSON.parse(data['_body']);
      this.class1 = [];
      this.items = [];
      for(var i=0;i<message.length;i++){
        this.class1[i] = message[i];
      }
    })
  }
  //点击获取不同分类
  sort(item){
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/getsort').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      for(let i=0;i<8;i++){
        this.items[i] = message[i].name;
      }
    }) 
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/getRecruit?&sort='+item.name).subscribe(data=>{
        var message = JSON.parse(data['_body']);
        console.log(message);
        this.class1 = [];
        for(var i=0;i<message.length;i++){
          this.class1[i] = message[i];
        }
    })
  }
//职位详情
  job(item){
     this.navCtrl.push('SeekjobmesPage',{item:item});
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
