import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class MePage {
list=['个人简介','修改个人简历','修改个人信息','抢单成功','版本更新','帮助与反馈','关于我们'];
  constructor(public navCtrl: NavController) {

  }

}
