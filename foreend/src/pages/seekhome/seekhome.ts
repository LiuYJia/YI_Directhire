import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeekhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekhome',
  templateUrl: 'seekhome.html',
})
export class SeekhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekhomePage');
  }
  icons='1';
  searchQuery: string = '';
  items: string[];
  list=[{title:'天猫销售运营加运营助理',
         price:'3K-5K',
         msg:'北京怡沁电子商务有限公司',
        locate:'桥西区',
        icon:'assets/imgs/1.jpg',
        },
        {title:'腾讯销售运营加运营助理',
         price:'3K-5K',
         msg:'北京怡沁电子商务有限公司',
        locate:'桥西区',
        icon:'assets/imgs/1.jpg',
        },
        {title:'阿里销售运营加运营助理',
         price:'3K-5K',
         msg:'北京怡沁电子商务有限公司',
        locate:'桥西区',
        icon:'assets/imgs/1.jpg',
        },
];
list2=[{title:'天猫客服运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'腾讯客服运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'阿里客服运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
];
list3=[{title:'天猫餐饮运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'腾讯餐饮运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'阿里餐饮运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
];
list4=[{title:'天猫计算机运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'腾讯计算机运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'阿里计算机运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
];
list5=[{title:'天猫财务运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'腾讯财务运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'阿里财务运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
];
list6=[{title:'天猫医疗运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'腾讯医疗运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'阿里医疗运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
];
list7=[{title:'天猫金融运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'腾讯金融售运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'阿里金融运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
];
list8=[{title:'天猫其他运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'腾讯其他运营加运营助理',
price:'3K-5K',
msg:'北京怡沁电子商务有限公司',
locate:'桥西区',
icon:'assets/imgs/1.jpg',
},
{title:'阿里其他运营加运营助理',
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
