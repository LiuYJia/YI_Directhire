import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recmessage',
  templateUrl: 'recmessage.html',
})
export class RecmessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecmessagePage');
  }
  items=[{img:"assets/imgs/class1.png",name:"seeker01",last:"last message!",time:'5:00'},
  {img:"assets/imgs/class2.png",name:"seeker02",last:"last message!",time:'4:00'},
  {img:"assets/imgs/class3.png",name:"seeker03",last:"last message!",time:'3:00'},
  {img:"assets/imgs/class4.png",name:"seeker04",last:"last message!",time:'2:00'}];
  gorecchat(item){
    this.navCtrl.push('RecchatPage',{all:item});
  }

}
