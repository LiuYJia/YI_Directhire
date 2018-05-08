import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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
import { StartPage } from '../pages/start/start';
import { AnimationPage } from '../pages/animation/animation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
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
    StartPage,
    AnimationPage,
  ],
  imports: [
    BrowserModule,
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
