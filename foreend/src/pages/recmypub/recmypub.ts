import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RecmypubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmypub',
  templateUrl: 'recmypub.html',
})
export class RecmypubPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl:AlertController) {
  }
  //一般职位绑定数据
  job;sort;name;num;money;age;school;tel;detail;intro;
  //一般职位验证绑定数据
  job0;sort0;name0;num0;money0;age0;school0;tel0;detail0;intro0;err;
  //可抢职位绑定数据
  job1;sort1;name1;num1;money1;age1;school1;tel1;detail1;intro1;
  position="publish";
  items = [];//类别
  sch = ['不限','实习生','大专','大专及以上','本科','本科及以上','研究生','研究生及以上'];
  ionViewDidEnter() {
    console.log('ionViewDidLoad RecmypubPage');   
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getSort').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      console.log(message);
      for(let i=0;i<8;i++){
        this.items[i] =message[i].name;
      }
    });
  }
  showAlert1() {
    let alert = this.alertCtrl.create({
      subTitle: '提交成功！',
      buttons: ['确定']
    });
   alert.present();
  } 
  showAlert2() {
    let alert = this.alertCtrl.create({
      subTitle: '提交失败！',
      buttons: ['确定']
    });
   alert.present();
  }
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  
  submit1(){
    if(this.job==null){this.job0 = '职位名称不可为空';}else{
      this.job0='';if(this.sort==null){this.sort0='类别不可为空'}else{
        this.sort0=''; if(this.name==null){this.name0='公司名称不可为空'}else{
          this.name0=''; if(this.num==null){this.num0='人数不可为空'}else{
            this.num0=''; if(this.money==null){this.money0='薪资不可为空'}else{
              this.money0=''; if(this.age==null){this.age0='年龄不可为空'}else{
                this.age0=''; if(this.school==null){this.school0='学历不可为空'}else{
                  this.school0=''; if(this.tel==null){this.tel0='电话不可为空'}else{
                    this.tel0=''; if(this.detail==null){this.detail0='职位要求不可为空'}else{
                      this.detail0=''; if(this.intro==null){this.intro0='公司介绍不可为空'}else{
                        this.intro0='';
                        this.http.post('http://127.0.0.1:3000/user/updateRecruit/publish',JSON.stringify({username:localStorage.getItem("login"),
      name:this.name,sort:this.sort,num:this.num,job:this.job,money:this.money,school:this.school,age:this.age,
      detail:this.detail,tel:this.tel}),{headers:this.headers}).subscribe(data=>{
        console.log(data);
        if(data['_body']==1) this.showAlert1();
        if(data['_body']==2) this.showAlert2();
      });
    }}}}}}}}}}
  }
  submit2(){
    if(this.job1==null||this.sort1==null||this.name1==null||this.num1==null||this.money1==null||this.age1==null||this.school1==null||this.tel1==null||this.detail1==null){
      this.err='除商家介绍外全部不可为空';
    }else{
      this.err='';
      this.http.post('',JSON.stringify({username:localStorage.getItem("login"),
      name:this.name1,sort:this.sort1,num:this.num1,job:this.job1,money:this.money1,school:this.school1,age:this.age1,
      detail:this.detail1,tel:this.tel1}),{headers:this.headers}).subscribe(data=>{
        console.log(data);
        if(data['_body']==1) this.showAlert1();
        if(data['_body']==2) this.showAlert2();
      });
    }   
   }
}
