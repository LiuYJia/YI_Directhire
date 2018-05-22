import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var BMap;
/**
 * Generated class for the SeeknearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seeknear',
  templateUrl: 'seeknear.html',
})
export class SeeknearPage {
  map: any;
  point:any;
  @ViewChild('map1') map_container1: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidEnter() {
    this.load();
  };
  load(){
    var map = new BMap.Map(this.map_container1.nativeElement);
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);
    function myFun(result){
      var cityName = result.name;
      console.log(result);
      alert("当前定位城市:"+cityName);
      // console.log(cityName);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
    console.log(myCity.cityName);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SeeknearPage');
  }
  info=[{job:'服务员',price:'￥80/天',time:'2017/12/27',location:'空中花园',name:'XXX'},
        {job:'服务员',price:'￥80/天',time:'2017/12/27',location:'空中花园',name:'XXX'},
        {job:'服务员',price:'￥80/天',time:'2017/12/27',location:'空中花园',name:'XXX'},
        {job:'服务员',price:'￥80/小时',time:'2017/12/27',location:'空中花园'}];












}
