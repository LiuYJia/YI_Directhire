import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeekmyPage } from './seekmy';

@NgModule({
  declarations: [
    SeekmyPage,
  ],
  imports: [
    IonicPageModule.forChild(SeekmyPage),
  ],
})
export class SeekmyPageModule {}
