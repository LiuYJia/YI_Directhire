import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

/**
 * Generated class for the RecmyseekerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmyseeker',
  templateUrl: 'recmyseeker.html',
})
export class RecmyseekerPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public http:Http) {
  }
  username;sort=[];items=[];
  name;school;age;sex;money;job;
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecmyseekerPage');
    //获取简历列表
    this.username = localStorage.getItem("login");
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getResume?r_username='+this.username).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(var i=0;i<message.length;i++){
        this.items[i] = message[i];
        this.items[i].img ='http://127.0.0.1:3000'+this.items[i].img;
      }
    });
  }
  //进入求职者详情页
  seeker(item){
    this.navCtrl.push('RecmyseekermesPage',{item:item});
  }
  //删除相应简历
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
   del(item){
    var list = this.items;
    var serve = this.http;
    var header = this.headers;
    var alert = this.alertCtrl;
    function del1(i) {
      let al = alert.create({subTitle: '删除成功！',buttons: ['确定']});
      al.present();
      list.splice(i,1);
    } 
    function del2() {
      let al = alert.create({subTitle: '删除失败！',buttons: ['确定']});
      al.present();
    }
    function showConfirm(data,i) {
      let confirm = alert.create({
        title: '确认删除此简历?',
        buttons: [{text: '取消',handler: () => {console.log('Disagree clicked');}},
          {text: '确认', handler: () => {if(data['_body']==1) del1(i);
             if(data['_body']==2) del2();}}]
      });
      confirm.present();
    }
    for(var i = 0;i < list.length; i++) { 
      !function(i){
          if(list[i] == item){  
            serve.post('http://127.0.0.1:3000/user/updateRecruit/delResume',JSON.stringify({s_username:item.username}),{headers:header}).subscribe(data=>{
              showConfirm(data,i);             
            });            
          } 
        }(i);    
    }
     
   }
}
