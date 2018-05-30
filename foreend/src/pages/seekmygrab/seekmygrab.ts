import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

/**
 * Generated class for the SeekmygrabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekmygrab',
  templateUrl: 'seekmygrab.html',
})
export class SeekmygrabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekmygrabPage');
  }
  info=[{job:'服务员',price:'￥80/天',time:'2017/12/27',location:'空中花园',num:'5人'},
        {job:'宣传人员',price:'￥80/天',time:'2017/12/27',location:'空中花园',num:'3人'},
        {job:'话务员',price:'￥80/天',time:'2017/12/27',location:'空中花园',num:'2人'},
        {job:'销售员',price:'￥80/小时',time:'2017/12/27',location:'空中花园',num:'2人'}];

  jobinfo(item){
    this.navCtrl.push('SeeknearmesPage',{mes:item});
  }
  //删除弹出框
  del1() {
    this.navCtrl.push('SeekmygrabPage');
   } 
   del2() {
     let alert = this.alertCtrl.create({
       subTitle: '删除失败！',
       buttons: ['确定']
     });
    alert.present();
   }
   showConfirm(data) {
     let confirm = this.alertCtrl.create({
       title: '确认删除本职位信息?',
       buttons: [{text: '取消',handler: () => {console.log('Disagree clicked');}},
         {text: '确认', handler: () => {if(data['_body']==1) this.del1();
            if(data['_body']==2) this.del2();}}]
     });
     confirm.present();
   }
   //删除
   headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
   del(item){
     this.http.post('',JSON.stringify({id:item.id}),{headers:this.headers}).subscribe(data=>{
       this.showConfirm(data);
     });   
   }
}
