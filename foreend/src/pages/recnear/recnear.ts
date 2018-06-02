import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the RecnearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recnear',
  templateUrl: 'recnear.html',
})
export class RecnearPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl:AlertController) {

  }
  job;tel;num;address;longitude;latitude;time;money;detail;
  ionViewDidEnter() {
    console.log('ionViewDidLoad RecnearPage');
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/Getnearpub?username='+localStorage.getItem('login')).subscribe(data=>{
      // console.log(data['_body']);
      var message = JSON.parse(data['_body']);
      for(var i=0;i<message.length;i++){
        this.info[i] = message[i];
      }

    })
  }

  info=[{job:"服务人员",tel:"13398567552",num:"3人",address:"河北师大",time:"06-01",money:"100",detail:"XXXXXXXXXXXX"}];
  //编辑
  msg(item){
    this.navCtrl.push('NearmsgPage',{mes:item});
  }
  //发布
  pub(){
    this.navCtrl.push('NearpubPage');
  }
  //删除
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  del(item){
   var list = this.info;
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
       title: '确认删除此附近发布?',
       buttons: [{text: '取消',handler: () => {console.log('Disagree clicked');}},
         {text: '确认', handler: () => {if(data['_body']==1) del1(i);
            if(data['_body']==2) del2();}}]
     });
     confirm.present();
   }
   for(var i = 0;i < list.length; i++) { 
     !function(i){
         if(list[i] == item){  
           serve.post('http://127.0.0.1:3000/user/updateRecruit/Delnear',JSON.stringify({id:item.id}),{headers:header}).subscribe(data=>{
             showConfirm(data,i);             
           });            
         } 
       }(i);    
   }
    
  }
}
