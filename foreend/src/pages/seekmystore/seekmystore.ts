import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

/**
 * Generated class for the SeekmystorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmystore',
  templateUrl: 'seekmystore.html',
})
export class SeekmystorePage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public http:Http) {
  }
  info = [];
  ionViewDidEnter() {
    console.log('ionViewDidLoad SeekmystorePage');
    this.http.get('http://127.0.0.1:3000/user/getMessage_seeker/getCollect?s_username='+localStorage.getItem('login')).subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(var i=0;i<message.length;i++){
        this.info[i] = message[i];
      }
    })
  }
  //进入职位详情页
  gojobmes(item){
    this.navCtrl.push('SeekjobmesPage',{item:item});
  }
  
   //删除弹出框
  //  del1() {
  //   let alert = this.alertCtrl.create({
  //     subTitle: '删除成功！',
  //     buttons: ['确定']
  //   });
  //  alert.present();
  //  } 
  //  del2() {
  //    let alert = this.alertCtrl.create({
  //      subTitle: '删除失败！',
  //      buttons: ['确定']
  //    });
  //   alert.present();
  //  }
  //  showConfirm(data) {
  //    let confirm = this.alertCtrl.create({
  //      title: '确认删除本职位信息?',
  //      buttons: [{text: '取消',handler: () => {console.log('Disagree clicked');}},
  //        {text: '确认', handler: () => {if(data['_body']==1) this.del1();
  //           if(data['_body']==2) this.del2();}}]
  //    });
  //    confirm.present();
  //  }
   //取消收藏
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
        title: '确认删除此收藏?',
        buttons: [{text: '取消',handler: () => {console.log('Disagree clicked');}},
          {text: '确认', handler: () => {if(data['_body']==1) del1(i);
             if(data['_body']==2) del2();}}]
      });
      confirm.present();
    }
    for(var i = 0;i < list.length; i++) { 
      !function(i){
          if(list[i] == item){  
            serve.post('http://127.0.0.1:3000/user/updateSeeker/delCollect',JSON.stringify({r_id:item.id}),{headers:header}).subscribe(data=>{
              showConfirm(data,i);             
            });            
          } 
        }(i);    
    }
     
   }


}
