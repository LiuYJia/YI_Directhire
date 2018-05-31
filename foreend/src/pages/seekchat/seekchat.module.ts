import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeekchatPage } from './seekchat';

@NgModule({
  declarations: [
    SeekchatPage,
  ],
  imports: [
    IonicPageModule.forChild(SeekchatPage),
  ],
})
export class SeekchatPageModule {}
