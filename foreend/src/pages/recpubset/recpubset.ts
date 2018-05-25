import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Headers } from '@angular/http';

/**
 * Generated class for the RecpubsetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recpubset',
  templateUrl: 'recpubset.html',
})
export class RecpubsetPage {

  id;job;sort;name;num;money;age;school;tel;detail;
  items = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public alertCtrl:AlertController) {
    this.id = navParams.get('title').id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecpubsetPage');
    //获取类别选项
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getSort').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(let i=0;i<8;i++){
        this.items[i] =message[i].name;
      }
    });
    //获取职位信息
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/msg_publishme?id='+this.id).subscribe(data=>{
      var message = JSON.parse(data['_body'])[0];
      console.log(message);
      this.id = message.id;
      this.job = message.job;
      this.sort = message.sort;
      this.name = message.name;
      this.num = message.num;
      this.money = message.money;
      this.age = message.age;
      this.school = message.school;
      this.tel = message.tel;
      this.detail = message.detail;
    })
  }
  //返回
  back(){
    this.navCtrl.push('RecmyallpubPage');
    console.log("back");
  }
  //提交弹出框
  showAlert1() {
    let alert = this.alertCtrl.create({
      subTitle: '修改成功！',
      buttons: ['确定']
    });
   alert.present();
  } 
  showAlert2() {
    let alert = this.alertCtrl.create({
      subTitle: '修改失败！',
      buttons: ['确定']
    });
   alert.present();
  }
  //点击提交修改
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  submit(){
    this.http.post('http://127.0.0.1:3000/user/updateRecruit/updatepubme',JSON.stringify({username:localStorage.getItem("login"),id:this.id,
    job:this.job,sort:this.sort,name:this.name,num:this.num,money:this.money,age:this.age,school:this.school,tel:this.tel,detail:this.detail}),{headers:this.headers}).subscribe(data=>{
      //console.log(data);
      if(data['_body']==1) this.showAlert1();
      if(data['_body']==2) this.showAlert2();
    });
  }
  //删除弹出框
  del1() {
    let alert = this.alertCtrl.create({
      subTitle: '删除成功！',
      buttons: ['确定']
    });
   alert.present();
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
  delete(){
    this.http.post('http://127.0.0.1:3000/user/updateRecruit/delmsg',JSON.stringify({id:this.id}),{headers:this.headers}).subscribe(data=>{
      this.showConfirm(data);
    });
  }
}
