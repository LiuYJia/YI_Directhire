import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// 声明百度地图对象
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
  rs;
  list=[];
@ViewChild('map1') map_container1: ElementRef;


  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  //当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发，解决每次进入页面都会调用一次插入数组数据操作问题。
  ionViewDidLoad() {
    this.load();
  };
  ok() {
    let alert = this.alertCtrl.create({
      title:'',
      subTitle: '恭喜你抢单成功',
      buttons: ['OK']
    });
    alert.present();
    
  }
  load(){
    // 百度地图的IP地址定位
    // this.list.push(4);
    // console.log(this.list);
    
    var map = new BMap.Map(this.map_container1.nativeElement);
    var point = new BMap.Point(114.529086,38.0034898);
    map.centerAndZoom(point,19);
    // map.setMapStyle({style:'hardedge'});
    var that = this;
    function myFun(result){
      // that.list.push(5);
      // console.log(that.list);
      var Lng=result.center.lng+0.0086166387;
      var Lat=result.center.lat-0.044986796757;
      var pm=new BMap.Point(Lng,Lat);
      //测试距离： var point1=new BMap.Point(106.581515,29.615467);
      // var cityName = result.name;
      // console.log(result);
      // alert("当前定位城市:"+cityName);
      console.log(Lng,Lat);
      map.enableScrollWheelZoom(true);
      // 商圈定位
      // var index = 0;
      // var myGeo = new BMap.Geocoder();
      // var adds = [
      //   new BMap.Point(114.529100,38.003697),
      //   new BMap.Point(114.529200,38.003234),
      //   new BMap.Point(114.529300,38.003552),
      //   new BMap.Point(114.529400,38.003700),
      //   new BMap.Point(114.529500,38.002344),
      //   new BMap.Point(114.529600,38.003568),
      //   new BMap.Point(114.529700,38.003321),
      //   new BMap.Point(114.529800,38.003878)
      // ];
      // for(var i = 0; i<adds.length; i++){
      //   var marker = new BMap.Marker(adds[i]);
      //   map.addOverlay(marker);
      //   marker.setLabel(new BMap.Label("我是商圈:"+(i+1),{offset:new BMap.Size(20,-10)}));
      // }
      // function bdGEO(){	
      //   var pt = adds[index];
      //   geocodeSearch(pt);
      //   index++;
      // }
      // function geocodeSearch(pt){
      //   if(index < adds.length-1){
      //     setTimeout(bdGEO,400);
      //   } 
      //   myGeo.getLocation(pt, function(rs){
      //     var addComp = rs.addressComponents;
      //     console.log(index + ". " +adds[index-1].lng + "," + adds[index-1].lat + "："  + "商圈(" + rs.business + ")  结构化数据(" + addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber + ")<br/><br/>");
      //   });
      // }
      // var data_info = [[114.526742,38.005921,"地址：河北师大新校区大学(外语教学部)"+"招聘信息:前端工程师10人"+"招聘信息:前端工程师10人"],
      // 			 [114.525294,38.005174,"地址：河北师范大学职技楼(A)"],
      //        [114.527747,38.005104,"地址：河北师大新校区国际文化交流学院"],
      //        [114.529364,38.003578,"地址：河北师大新校区-软件学院"],
      //        [114.529845,38.003589,"地址：河北师大新校区-理科群一号楼",'招聘：']
      // 			];
         var data_info=[
                     {tel:'1234567',distance:'',dst:'',lng:114.526742,lat:38.005921,location:'商家名称:河北师大新校区大学(外语教学部)',info:'职位要求:前端工程师10人,￥50/小时'}, 
                     {tel:'1234567',distance:'',dst:'',lng:114.525294,lat:38.005174,location:'商家名称:河北师范大学职技楼(A)',info:'职位要求:PHP工程师5人,￥50/小时'},
                     {tel:'1234567',distance:'',dst:'',lng:114.527747,lat:38.005104,location:'商家名称:河北师大新校区国际文化交流学院',info:'职位要求:算法工程师5人,￥50/小时'},   
                     {tel:'1234567',distance:'',dst:'',lng:114.529845,lat:38.003589,location:'商家名称:河北师大新校区-理科群一号楼',info:'职位要求:测试工程师5人,￥50/小时'},                 
                     {tel:'1234567',distance:'',dst:'',lng:114.529118,lat:38.004057,location:'商家名称:师大新校区-移动物联网研究学院',info:'职位要求:测试工程师5人,￥50/小时'},

                      ];
                      
    var opts = {
          width : 250,     // 信息窗口宽度
          height: 80,     // 信息窗口高度
          title : "商家信息：" , // 信息窗口标题
          enableMessage:true//设置允许信息窗发送短息
           };
    for(var i=0;i<data_info.length;i++){
      data_info[i].dst=new BMap.Point(data_info[i].lng,data_info[i].lat);   
     console.log(point);
      data_info[i].distance='距离您当前位置:'+(map.getDistance(pm,data_info[i].dst)).toFixed(2)+' 米。';
      console.log(data_info[i].distance);
      if((map.getDistance(pm,data_info[i].dst)).toFixed(2)<50){
        console.log(data_info[i].location+'在50米内');
        console.log(data_info[i]);       
        that.list.push(data_info[i]);
        console.log(that.list);
    }
      var marker = new BMap.Marker(new BMap.Point(data_info[i].lng,data_info[i].lat));  // 创建标注
      var content = data_info[i].location+'<br/>'+data_info[i].info+'<br/>'+data_info[i].distance;
      console.log(content);
      map.addOverlay(marker);               // 将标注添加到地图中
      addClickHandler(content,marker);
    }
    function addClickHandler(content,marker){
      marker.addEventListener("click",function(e){
        openInfo(content,e)}
      );
    }
    function openInfo(content,e){
      var p = e.target;
      var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
      map.openInfoWindow(infoWindow,point); //开启信息窗口
    }
      var geoc = new BMap.Geocoder();
      var pt=new BMap.Point(Lng,Lat);
      console.log(result);
      geoc.getLocation(pt, function(rs){
        // rs.point.lng=;
        // rs.point.lat=;  
          var icon=new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(200,100));
          var mk = new BMap.Marker(rs.point,{icon:icon});
          map.addOverlay(mk);
          map.panTo(rs.point);
          // var addComp = rs.addressComponents;
        
      });        
      
      
      // console.log(cityName);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
  }

//在安卓的配置文件里加一句：<uses-permission android:name="android.permission.INTERNET" /> 解决权限问题
//百度地图浏览器定位，在Ionic中会有状态码报错问题，但是不影响程序执行
  //	var geolocation = new BMap.Geolocation();
	// geolocation.getCurrentPosition(function(r){
	// 	if(this.getStatus() == BMAP_STATUS_SUCCESS){
	// 		var mk = new BMap.Marker(r.point);
	// 		map.addOverlay(mk);
	// 		map.panTo(r.point);
	// 		alert('您的位置：'+r.point.lng+','+r.point.lat);
	// 	}
	// 	else {
	// 		alert('failed'+this.getStatus());
	// 	}        
	// },{enableHighAccuracy: true})




}
