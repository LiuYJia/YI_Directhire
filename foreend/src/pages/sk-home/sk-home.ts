import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sk-home',
  templateUrl: 'sk-home.html',
})
export class SkHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkHomePage');
  } searchQuery: string = '';
  items: string[];
  list=[{title:'招聘天猫运营加运营助理',
         price:'3K-5K',
         msg:'北京怡沁电子商务有限公司',
        locate:'桥西区',
        icon:'assets/imgs/1.jpg',
        },
        {title:'招聘天猫运营加运营助理',
         price:'3K-5K',
         msg:'北京怡沁电子商务有限公司',
        locate:'桥西区',
        icon:'assets/imgs/1.jpg',
        },
        {title:'招聘天猫运营加运营助理',
         price:'3K-5K',
         msg:'北京怡沁电子商务有限公司',
        locate:'桥西区',
        icon:'assets/imgs/1.jpg',
        },
  

];
  initializeItems() {
    this.items = [
      '快递员',
      '美团外卖',
      '滴滴接送',
      '发传单',
    ]
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
      this.items=[];
    }
  }
}
