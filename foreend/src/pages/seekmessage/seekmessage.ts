import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{SeekremessagePage} from '../seekremessage/seekremessage';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
/**
 * Generated class for the SeekmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmessage',
  templateUrl: 'seekmessage.html',
})
export class SeekmessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  info=[];
  ionViewDidEnter() {
    console.log('ionViewDidLoad SeekmessagePage');
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getarticle').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(var i=0;i<message.length;i++){
        this.info[i] = message[i];
      }
    });
  }
  list=[{name:'马云',img:'assets/imgs/18.jpg',ig:'五星级酒店不能去抢麻辣烫的生意，要有自己的定位。',time:'10:11'},
  {name:'马化腾',img:'assets/imgs/19.jpg',ig:'再小的网店，做的都是全中国的生意。',time:'11:11'},
  {name:'雷军',img:'assets/imgs/20.jpg',ig:'买家不是职业采购，买家的判断来源于生活经验，而不是工程师学历。',time:'12:41'},
  {name:'刘强东',img:'assets/imgs/21.jpg',ig:'页面漂亮的目的不是让买家爽心悦目，是为了让消费者信任你。',time:'13:01'}];
  //进入聊天页面
  goseekchat(item){
    this.navCtrl.push('SeekchatPage',{all:item});
  }
  //进入文章详情页
  goto(item){
    this.navCtrl.push('SeekremessagePage',{all:item});
  }
  //删除消息列表项
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  del(item){
    var list = this.list;
    var serve = this.http;
    var header = this.headers;
    for(var i = 0;i < list.length; i++) { 
      !function(i){
          if(list[i] == item){  
            serve.post('',JSON.stringify({}),{headers:header}).subscribe(data=>{
              list.splice(i,1);            
            });            
          } 
        }(i);    
    }
  }
}
