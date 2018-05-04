import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
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
import { InformationPage } from '../pages/Information/Information';
import { MePage } from '../pages/Me/Me';
import { NearbyPage } from '../pages/Nearby/Nearby';
import { SkHomePage } from '../pages/SkHome/SkHome';
import { AnimationPage } from '../pages/animation/animation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
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
    InformationPage,
    MePage,
    SkHomePage,
    NearbyPage
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
    AboutPage,
    ContactPage,
    HomePage,
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
    InformationPage,
    MePage,
    SkHomePage,
    NearbyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
