import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SeekhomePage } from '../pages/seekhome/seekhome';
import { SeekmessagePage } from '../pages/seekmessage/seekmessage';
import { SeekmiddlePage } from '../pages/seekmiddle/seekmiddle';
import { SeeknearPage } from '../pages/seeknear/seeknear';
import { SeekmyPage } from '../pages/seekmy/seekmy';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PwbackPage } from '../pages/pwback/pwback';
import { RechomePage } from '../pages/rechome/rechome';
import { RecmessagePage } from '../pages/recmessage/recmessage';
import { RecmiddlePage } from '../pages/recmiddle/recmiddle';
import { RecnearPage } from '../pages/recnear/recnear';
import { RecmyPage } from '../pages/recmy/recmy';
import { RectabsPage } from '../pages/rectabs/rectabs';
import { RecloginPage } from '../pages/reclogin/reclogin';
import { StartPage } from '../pages/start/start';
import { AnimationPage } from '../pages/animation/animation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SeekhomePage,
    SeekmessagePage,
    SeekmiddlePage,
    SeeknearPage,
    SeekmyPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    PwbackPage,
    RechomePage,
    RecmessagePage,
    RecmiddlePage,
    RecnearPage,
    RecmyPage,
    RectabsPage,
    RecloginPage,
    StartPage,
    AnimationPage,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      backButtonText:'',
      pageTransition:'ios-transition',
      backButtonIcon:"arrow-back"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SeekhomePage,
    SeekmessagePage,
    SeekmiddlePage,
    SeeknearPage,
    SeekmyPage,
    TabsPage,   
    LoginPage,
    RegisterPage,
    PwbackPage,
    RechomePage,
    RecmessagePage,
    RecmiddlePage,
    RecnearPage,
    RecmyPage,
    RectabsPage,
    RecloginPage,
    StartPage,
    AnimationPage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
